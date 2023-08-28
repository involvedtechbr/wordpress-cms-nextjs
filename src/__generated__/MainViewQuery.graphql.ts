/**
 * @generated SignedSource<<cb14c0060e8a6fca504b3201dc445d09>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MainViewQuery$variables = {};
export type MainViewQuery$data = {
  readonly generalSettings: {
    readonly description: string | null;
    readonly title: string | null;
  } | null;
  readonly page: {
    readonly banner: {
      readonly bannerImage: {
        readonly altText: string | null;
        readonly sourceUrl: string | null;
      } | null;
      readonly descricao: string | null;
      readonly titulo: string | null;
    } | null;
    readonly id: string;
  } | null;
};
export type MainViewQuery = {
  response: MainViewQuery$data;
  variables: MainViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
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
},
v1 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "home"
  },
  {
    "kind": "Literal",
    "name": "idType",
    "value": "URI"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "titulo",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "descricao",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sourceUrl",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "altText",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainViewQuery",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Page",
        "kind": "LinkedField",
        "name": "page",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Page_Banner",
            "kind": "LinkedField",
            "name": "banner",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MediaItem",
                "kind": "LinkedField",
                "name": "bannerImage",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "page(id:\"home\",idType:\"URI\")"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainViewQuery",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Page",
        "kind": "LinkedField",
        "name": "page",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Page_Banner",
            "kind": "LinkedField",
            "name": "banner",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MediaItem",
                "kind": "LinkedField",
                "name": "bannerImage",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "page(id:\"home\",idType:\"URI\")"
      }
    ]
  },
  "params": {
    "cacheID": "af02bd9c0dc56af0124990e2fc3a3206",
    "id": null,
    "metadata": {},
    "name": "MainViewQuery",
    "operationKind": "query",
    "text": "query MainViewQuery {\n  generalSettings {\n    title\n    description\n  }\n  page(id: \"home\", idType: URI) {\n    id\n    banner {\n      titulo\n      descricao\n      bannerImage {\n        sourceUrl\n        altText\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4d877652949e534ee9eab13255904536";

export default node;
