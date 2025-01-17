package com.vnpt.it5.ics.authentication;

import org.keycloak.Config.Scope;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.KeycloakSessionFactory;
import org.keycloak.services.resource.RealmResourceProvider;
import org.keycloak.services.resource.RealmResourceProviderFactory;


public class KeyCloakUserApiProviderFactory implements RealmResourceProviderFactory {
    public static final String ID = "rest";


    public RealmResourceProvider create(KeycloakSession session) {

        return new KeyCloakUserApiProvider(session);
    }

    public void init(Scope config) {
    }

    public void postInit(KeycloakSessionFactory factory) {
    }

    public void close() {
    }

    public String getId() {
        return ID;
    }
}