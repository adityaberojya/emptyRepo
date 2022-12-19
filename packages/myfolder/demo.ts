

import {
    ApiEntity,
    apiEntityV1alpha1Validator,
    ComponentEntity,
    componentEntityV1alpha1Validator,
    DomainEntity,
    domainEntityV1alpha1Validator,
    Entity,
    getCompoundEntityRef,
    GroupEntity,
    groupEntityV1alpha1Validator,
    locationEntityV1alpha1Validator,
    parseEntityRef,
    RELATION_API_CONSUMED_BY,
    RELATION_API_PROVIDED_BY,
    RELATION_CHILD_OF,
    RELATION_CONSUMES_API,
    RELATION_DEPENDENCY_OF,
    RELATION_DEPENDS_ON,
    RELATION_HAS_MEMBER,
    RELATION_HAS_PART,
    RELATION_MEMBER_OF,
    RELATION_OWNED_BY,
    RELATION_OWNER_OF,
    RELATION_PARENT_OF,
    RELATION_PART_OF,
    RELATION_PROVIDES_API,
    ResourceEntity,
    resourceEntityV1alpha1Validator,
    SystemEntity,
    systemEntityV1alpha1Validator,
    UserEntity,
    userEntityV1alpha1Validator,
  } from '@backstage/catalog-model';
  import {
    CatalogProcessor,
    CatalogProcessorEmit,
    LocationSpec,
    processingResult,
  } from '@backstage/plugin-catalog-node';
  
  
  private readonly const validators = [
    apiEntityV1alpha1Validator,
    componentEntityV1alpha1Validator,
    resourceEntityV1alpha1Validator,
    groupEntityV1alpha1Validator,
    locationEntityV1alpha1Validator,
    userEntityV1alpha1Validator,
    systemEntityV1alpha1Validator,
    domainEntityV1alpha1Validator,
  ];

  type Entity = {
    property1: string,
    property2: string,
  }

    validateEntityKind(entity: Entity): boolean {
        for (const validator of validators) {
            const results = await validator.check(entity);
            if (results) {
              if(validator === apiEntityV1alpha1Validator){
                
              }
              return true;
            }
          }
      
          return false;
    }

function validateEntityKind(entity: any, Entity: any) {
    throw new Error('Function not implemented.');
}
  