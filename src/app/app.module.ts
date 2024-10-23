import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { JsonServerStorageMapping } from './core/repositories/impl/people-mapping-json-server.service';
import { GroupRepositoryFactory, PeopleRepositoryFactory } from './core/repositories/repository.factory';
import { PEOPLE_RESOURCE_NAME_TOKEN, PEOPLE_API_URL_TOKEN, PEOPLE_REPOSITORY_MAPPING_TOKEN, GROUP_RESOURCE_NAME_TOKEN, GROUP_API_URL_TOKEN, GROUP_REPOSITORY_MAPPING_TOKEN } from './core/repositories/repository.tokens';
import { PeopleService } from './core/services/impl/people.service';
import { GroupService } from './core/services/impl/group.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(),
    
    { provide: PEOPLE_RESOURCE_NAME_TOKEN, useValue: 'personas' },
    { provide: GROUP_RESOURCE_NAME_TOKEN, useValue: 'grupos'},
    { provide: PEOPLE_API_URL_TOKEN, useValue: 'http://localhost:3000' },
    { provide: GROUP_API_URL_TOKEN, useValue: 'http://localhost:3000'},
    // Registrar los repositorios
    { 
      provide: PEOPLE_REPOSITORY_MAPPING_TOKEN, 
      useClass: JsonServerStorageMapping
    },
    { provide: GROUP_REPOSITORY_MAPPING_TOKEN,
      useClass: JsonServerStorageMapping
    },
    PeopleRepositoryFactory,
    GroupRepositoryFactory,
    // Registrar otros repositorios según sea necesario
    // Servicios de aplicación
    {
      provide: 'PeopleService',
      useClass: PeopleService
    },
    { provide: 'GroupService',
      useClass: GroupService
    }
  ],
  // ... otros proveedores],
  bootstrap: [AppComponent],
})
export class AppModule {}
