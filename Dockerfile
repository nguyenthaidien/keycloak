# syntax=docker/dockerfile:1.3

FROM maven:3.8.1-openjdk-11 AS build 

WORKDIR /build 

COPY . ./

RUN --mount=type=cache,target=/root/.m2 mvn clean install -f ./plugins/user_management/pom.xml

FROM quay.io/keycloak/keycloak:18.0.2

LABEL maintainer="tribao"

ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=change_me

#RUN sed -i -E "s/(<staticMaxAge>)2592000(<\/staticMaxAge>)/\1\-1\2/" /opt/jboss/keycloak/standalone/configuration/standalone.xml
#RUN sed -i -E "s/(<cacheThemes>)true(<\/cacheThemes>)/\1false\2/" /opt/jboss/keycloak/standalone/configuration/standalone.xml
#RUN sed -i -E "s/(<cacheTemplates>)true(<\/cacheTemplates>)/\1false\2/" /opt/jboss/keycloak/standalone/configuration/standalone.xml

COPY --from=build /build/plugins/user_management/target/authentication-0.0.1-SNAPSHOT.jar  /opt/jboss/keycloak/standalone/deployments
COPY --from=build /build/themes/ICS  /opt/jboss/keycloak/themes/ICS
COPY --from=build /build/themes/base/login/login.ftl  /opt/jboss/keycloak/themes/base/login

COPY --from=build /build/keycloak-config/My-Realm-realm.json  /opt/keycloak/data/import/
RUN /opt/keycloak/bin/kc.sh import --file /opt/keycloak/data/import/My-Realm-realm.json

CMD ["start-dev"]