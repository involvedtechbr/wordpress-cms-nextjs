/**
 * @generated SignedSource<<51e9714040d1f0e477cebdec9f0b15cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HeaderQuery$variables = {};
export type HeaderQuery$data = {
  readonly generalSettings: {
    readonly description: string | null;
    readonly title: string | null;
  } | null;
};
export type HeaderQuery = {
  response: HeaderQuery$data;
  variables: HeaderQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GeneralSettings",
    "kind": "LinkedField",
    "name": "generalSettings",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HeaderQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HeaderQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d46ef671aebfb678b8ee76f5aff33e7f",
    "id": null,
    "metadata": {},
    "name": "HeaderQuery",
    "operationKind": "query",
    "text": "query HeaderQuery {\n  generalSettings {\n    title\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "72396a796b7bc5864df41322a09ae07c";

export default node;
