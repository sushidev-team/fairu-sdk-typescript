import { graphql, HttpResponse } from 'msw';
import { assetFixtures } from './fixtures/assets';
import { folderFixtures } from './fixtures/folders';

export const handlers = [
  // Health check
  graphql.query('HealthCheck', () => {
    return HttpResponse.json({
      data: {
        healthCheck: {
          version: '1.0.0',
          healthy: true,
        },
      },
    });
  }),

  // Asset queries
  graphql.query('FairuFile', ({ variables }) => {
    const asset = assetFixtures.find((a) => a.id === variables.id);
    return HttpResponse.json({
      data: { fairuFile: asset ?? null },
    });
  }),

  graphql.query('FairuFiles', ({ variables }) => {
    const { page = 1, perPage = 20, folder } = variables;
    let assets = [...assetFixtures];

    if (folder) {
      assets = assets.filter((a) => a.folder_id === folder);
    }

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedAssets = assets.slice(start, end);

    return HttpResponse.json({
      data: {
        fairuFiles: {
          data: paginatedAssets,
          paginatorInfo: {
            currentPage: page,
            lastPage: Math.ceil(assets.length / perPage),
            perPage,
            total: assets.length,
            hasMorePages: end < assets.length,
            count: paginatedAssets.length,
            firstItem: start + 1,
            lastItem: Math.min(end, assets.length),
          },
        },
      },
    });
  }),

  // Folder queries
  graphql.query('FairuFolder', ({ variables }) => {
    const folder = folderFixtures.find((f) => f.id === variables.id);
    return HttpResponse.json({
      data: { fairuFolder: folder ?? null },
    });
  }),

  // Mutations
  graphql.mutation('UpdateFairuFile', ({ variables }) => {
    const { data } = variables;
    const asset = assetFixtures.find((a) => a.id === data.id);

    if (!asset) {
      return HttpResponse.json({
        errors: [{ message: 'Asset not found' }],
      });
    }

    const updatedAsset = { ...asset, ...data };
    return HttpResponse.json({
      data: { updateFairuFile: updatedAsset },
    });
  }),

  graphql.mutation('DeleteFairuFile', ({ variables }) => {
    const asset = assetFixtures.find((a) => a.id === variables.id);
    return HttpResponse.json({
      data: { deleteFairuFile: !!asset },
    });
  }),

  // Upload mutations
  graphql.mutation('CreateFairuUploadLink', ({ variables }) => {
    return HttpResponse.json({
      data: {
        createFairuUploadLink: {
          id: 'new-upload-id',
          url: 'https://upload.example.com/presigned-url',
        },
      },
    });
  }),

  graphql.mutation('InitFairuMultipartUpload', ({ variables }) => {
    return HttpResponse.json({
      data: {
        initFairuMultipartUpload: {
          id: 'multipart-file-id',
          upload_id: 'multipart-upload-id',
        },
      },
    });
  }),

  graphql.mutation('GetFairuMultipartPartUrl', ({ variables }) => {
    return HttpResponse.json({
      data: {
        getFairuMultipartPartUrl: {
          url: `https://upload.example.com/part/${variables.partNumber}`,
          part_number: variables.partNumber,
        },
      },
    });
  }),

  graphql.mutation('CompleteFairuMultipartUpload', ({ variables }) => {
    return HttpResponse.json({
      data: {
        completeFairuMultipartUpload: {
          id: variables.fileId,
          url: 'https://cdn.example.com/uploaded-file',
        },
      },
    });
  }),

  graphql.mutation('AbortFairuMultipartUpload', () => {
    return HttpResponse.json({
      data: { abortFairuMultipartUpload: true },
    });
  }),
];
