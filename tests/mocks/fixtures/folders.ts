import type { FairuFolder } from '../../../src/generated/graphql';

export const folderFixtures: FairuFolder[] = [
  {
    id: 'folder-1',
    name: 'Images',
    parent_id: null,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'folder-2',
    name: 'Videos',
    parent_id: null,
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z',
  },
  {
    id: 'folder-3',
    name: 'Subfolders',
    parent_id: 'folder-1',
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-01-03T00:00:00Z',
  },
];
