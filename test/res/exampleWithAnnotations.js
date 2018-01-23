/*
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
export default {
  id: 'b1c01ce0-9625-4cdd-82f6-2ece255d108c',
  parents: [
    {
      id: 'block-a51ab531-77ce-4c48-a877-0cf1a413256c',
      sha: 'e10010e39f88d5843ecd3756bb81d24665bfb023',
    },
  ],
  metadata: {
    name: 'BBa_Q04121',
    description: 'QPI (B0034.C0012.B0015.R0011)',
    authors: [],
    tags: {},
    color: '#D28482',
    author: 'Caitlin Conboy',
    created: '2003-12-02',
  },
  sequence: {
    md5: '68c1d50ae20ed2ef5e88e1e4c67d1ca4',
    length: 1371,
    annotations: [
      {
        isForward: false,
        start: 1,
        end: 12,
        name: 'BBa_B0034',
        type: 'BioBrick',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 5,
        end: 8,
        name: '',
        type: 'conserved',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 19,
        end: 1146,
        name: 'lacI-LVA',
        type: 'cds',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 19,
        end: 1146,
        name: 'BBa_C0012',
        type: 'BioBrick',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1108,
        end: 1146,
        name: 'LVA',
        type: 'tag',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1147,
        end: 1171,
        name: 'Help:Barcodes',
        type: 'barcode',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1180,
        end: 1259,
        name: 'BBa_B0010',
        type: 'BioBrick',
        tags: {},
        notes: {},
      },
      {
        isForward: false,
        start: 1180,
        end: 1308,
        name: 'BBa_B0015',
        type: 'BioBrick',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1191,
        end: 1234,
        name: '',
        type: 'stem_loop',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1268,
        end: 1308,
        name: 'BBa_B0012',
        type: 'BioBrick',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1275,
        end: 1294,
        name: 'T7 TE',
        type: 'stem_loop',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1295,
        end: 1308,
        name: '',
        type: 'polya',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1301,
        end: 1301,
        name: '',
        type: 'stop',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1317,
        end: 1370,
        name: 'BBa_R0011',
        type: 'BioBrick',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1319,
        end: 1335,
        name: 'lac O1',
        type: 'operator',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1336,
        end: 1341,
        name: '-35',
        type: 'promoter',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1342,
        end: 1358,
        name: 'lac O1',
        type: 'operator',
        tags: {},
        notes: {},
      },
      {
        isForward: true,
        start: 1359,
        end: 1364,
        name: '-10',
        type: 'promoter',
        tags: {},
        notes: {},
      },
    ],
  },
  source: {
    source: 'igem',
    id: 'BBa_Q04121',
    url: 'http://parts.igem.org/Part:BBa_Q04121',
  },
  rules: {
    role: 'inverter',
  },
  components: [],
  options: [],
  notes: {},
};