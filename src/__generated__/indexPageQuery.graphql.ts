/**
 * @generated SignedSource<<3764008377019bee4324598fd81e39bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type indexPageQuery$variables = {};
export type indexPageQuery$data = {
  readonly generalSettings: {
    readonly description: string | null;
    readonly title: string | null;
  } | null;
};
export type indexPageQuery = {
  response: indexPageQuery$data;
  variables: indexPageQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      concreteType: 'GeneralSettings',
      kind: 'LinkedField',
      name: 'generalSettings',
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'title',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'description',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'indexPageQuery',
      selections: v0 /*: any*/,
      type: 'RootQuery',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'indexPageQuery',
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: '9e03a79c5bcfbbcdae92e69a5bba4f22',
      id: null,
      metadata: {},
      name: 'indexPageQuery',
      operationKind: 'query',
      text: 'query indexPageQuery {\n  generalSettings {\n    title\n    description\n  }\n}\n',
    },
  };
})();

(node as any).hash = '829d0c6113cbf764ddeb633b7b72eafd';

export default node;
