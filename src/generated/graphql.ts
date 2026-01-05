import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: { input: string; output: string; }
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: { input: string; output: string; }
  /** Defines the type of a workflow structure */
  WorkflowStructure: { input: Record<string, unknown>; output: Record<string, unknown>; }
};

export type DefaultPaginator = {
  __typename: 'DefaultPaginator';
  count: Maybe<Scalars['Int']['output']>;
  currentPage: Maybe<Scalars['Int']['output']>;
  firstItem: Maybe<Scalars['Int']['output']>;
  hasMorePages: Maybe<Scalars['Boolean']['output']>;
  lastItem: Maybe<Scalars['Int']['output']>;
  lastPage: Maybe<Scalars['Int']['output']>;
  perPage: Maybe<Scalars['Int']['output']>;
  total: Maybe<Scalars['Int']['output']>;
};

/** Result type for fairuAllFilesFlat query - S3-compatible flat file listing */
export type FairuAllFilesFlatResult = {
  __typename: 'FairuAllFilesFlatResult';
  /** List of entries (files and empty folders) */
  entries: Array<FairuFlatEntry>;
  /** True if there are more pages */
  hasMore: Scalars['Boolean']['output'];
  /** Cursor for next page (null if no more pages) */
  nextCursor: Maybe<Scalars['String']['output']>;
};

export type FairuAsset = {
  __typename: 'FairuAsset';
  alt: Maybe<Scalars['String']['output']>;
  blocked: Maybe<Scalars['Boolean']['output']>;
  blurhash: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['String']['output']>;
  copyright_text: Maybe<Scalars['String']['output']>;
  copyrights: Maybe<Array<FairuCopyright>>;
  created_at: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  focal_point: Maybe<Scalars['String']['output']>;
  has_error: Maybe<Scalars['Boolean']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  licenses: Maybe<Array<FairuLicense>>;
  mime: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  original_height: Maybe<Scalars['Int']['output']>;
  original_width: Maybe<Scalars['Int']['output']>;
  size: Maybe<Scalars['Int']['output']>;
  updated_at: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
  versions: Maybe<Array<FairuAssetVideoVersions>>;
  width: Maybe<Scalars['Int']['output']>;
};


export type FairuAssetCaptionArgs = {
  raw: InputMaybe<Scalars['Boolean']['input']>;
};


export type FairuAssetDescriptionArgs = {
  raw: InputMaybe<Scalars['Boolean']['input']>;
};


export type FairuAssetUrlArgs = {
  focal_point: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  sign: InputMaybe<Scalars['Int']['input']>;
  version: InputMaybe<FairuAssetVideoVersions>;
  width: InputMaybe<Scalars['Int']['input']>;
  withStoredFocalPoint: InputMaybe<Scalars['Boolean']['input']>;
};

export type FairuAssetList = {
  __typename: 'FairuAssetList';
  data: Maybe<Array<FairuAsset>>;
  paginatorInfo: Maybe<DefaultPaginator>;
};

export type FairuAssetVideoVersions =
  | 'HIGH'
  | 'LOW'
  | 'MEDIUM';

export type FairuCopyright = {
  __typename: 'FairuCopyright';
  active: Maybe<Scalars['Boolean']['output']>;
  blocked: Maybe<Scalars['Boolean']['output']>;
  created_at: Maybe<Scalars['DateTime']['output']>;
  email: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['DateTime']['output']>;
  website: Maybe<Scalars['String']['output']>;
};

export type FairuCopyrightDto = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type FairuCopyrightList = {
  __typename: 'FairuCopyrightList';
  data: Maybe<Array<FairuCopyright>>;
  paginatorInfo: Maybe<DefaultPaginator>;
};

export type FairuCustomDomainStatus =
  | 'CHECKING'
  | 'FAILED'
  | 'NONE'
  | 'SUCCESS';

export type FairuDisk = {
  __typename: 'FairuDisk';
  active: Maybe<Scalars['Boolean']['output']>;
  created_at: Maybe<Scalars['DateTime']['output']>;
  credentials: Maybe<FairuDiskCredentials>;
  delete_at_origin: Maybe<Scalars['Boolean']['output']>;
  folder: Maybe<FairuFolder>;
  healthy: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  path: Maybe<Scalars['String']['output']>;
  pattern: Maybe<Scalars['String']['output']>;
  syncing: Maybe<Scalars['Boolean']['output']>;
  type: Maybe<FairuDiskType>;
  updated_at: Maybe<Scalars['DateTime']['output']>;
};

export type FairuDiskCredentials = FairuDiskFtpCredentials | FairuDiskS3Credentials;

export type FairuDiskCredentialsDto = {
  /** For S3 */
  bucket?: InputMaybe<Scalars['String']['input']>;
  /** For S3 */
  endpoint?: InputMaybe<Scalars['String']['input']>;
  /** For FTP/SFTP */
  ftp_host?: InputMaybe<Scalars['String']['input']>;
  /** For FTP/SFTP */
  ftp_password?: InputMaybe<Scalars['String']['input']>;
  /** For FTP/SFTP */
  ftp_port?: InputMaybe<Scalars['Int']['input']>;
  /** For FTP/SFTP */
  ftp_username?: InputMaybe<Scalars['String']['input']>;
  /** For S3 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** For S3 */
  region?: InputMaybe<Scalars['String']['input']>;
  /** For S3 */
  secret?: InputMaybe<Scalars['String']['input']>;
  /** For S3 */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FairuDiskDto = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  credentials?: InputMaybe<FairuDiskCredentialsDto>;
  delete_at_origin?: InputMaybe<Scalars['Boolean']['input']>;
  folder_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pattern?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FairuDiskType>;
};

export type FairuDiskFtpCredentials = {
  __typename: 'FairuDiskFTPCredentials';
  ftp_host: Maybe<Scalars['String']['output']>;
  ftp_password: Maybe<Scalars['String']['output']>;
  ftp_port: Maybe<Scalars['Int']['output']>;
  ftp_username: Maybe<Scalars['String']['output']>;
};

export type FairuDiskList = {
  __typename: 'FairuDiskList';
  data: Maybe<Array<FairuDisk>>;
  paginatorInfo: Maybe<DefaultPaginator>;
};

export type FairuDiskS3Credentials = {
  __typename: 'FairuDiskS3Credentials';
  bucket: Maybe<Scalars['String']['output']>;
  endpoint: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  region: Maybe<Scalars['String']['output']>;
  secret: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type FairuDiskStatus = {
  __typename: 'FairuDiskStatus';
  failed: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  open: Maybe<Scalars['Int']['output']>;
  pending: Maybe<Scalars['Int']['output']>;
  synced: Maybe<Scalars['Int']['output']>;
  syncing: Maybe<Scalars['Boolean']['output']>;
};

export type FairuDiskType =
  | 'FTP'
  | 'S3'
  | 'SFTP';

export type FairuDmca = {
  __typename: 'FairuDmca';
  email: Maybe<Scalars['String']['output']>;
  file: Maybe<FairuAsset>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  reply: Maybe<Scalars['String']['output']>;
  reply_send: Maybe<Scalars['Boolean']['output']>;
  status: Maybe<FairuDmcaStatus>;
};

export type FairuDmcaComplainDto = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type FairuDmcaDto = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  reply?: InputMaybe<Scalars['String']['input']>;
  reply_send?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FairuDmcaList = {
  __typename: 'FairuDmcaList';
  data: Maybe<Array<FairuDmca>>;
  paginatorInfo: Maybe<DefaultPaginator>;
};

export type FairuDmcaStatus =
  | 'ACCEPTED'
  | 'DENIES'
  | 'FAILED'
  | 'OPEN';

export type FairuEntry = FairuAsset | FairuFolder;

export type FairuFileAccessSignature = {
  __typename: 'FairuFileAccessSignature';
  expires_at: Scalars['String']['output'];
  file_id: Scalars['ID']['output'];
  signature: Scalars['String']['output'];
};

export type FairuFileDto = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Define an alternative text */
  alt?: InputMaybe<Scalars['String']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  /** This text should be used for text below the asset - html supported */
  caption?: InputMaybe<Scalars['String']['input']>;
  /** Use the copyright ids to pass the list to the file */
  copyrightIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Add an internal description to the file - html supported */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Define an focal point in terms of y-x-zoom eg. 0-10-1 */
  focal_point?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Use the ids from license to define a license fo this file */
  licenseIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Enter a name without the file extension - otherwise it will be part of the name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FairuFilePdfSignatureRequest = {
  __typename: 'FairuFilePdfSignatureRequest';
  config_url: Maybe<Scalars['String']['output']>;
  emails: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  file: Maybe<FairuAsset>;
  id: Scalars['ID']['output'];
  signature_id: Maybe<Scalars['ID']['output']>;
  status: Maybe<FairuPdfSignatureRequestStatus>;
};

export type FairuFilePdfSignatureRequestDto = {
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  file_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Single entry in flat file listing (file or empty folder) */
export type FairuFlatEntry = {
  __typename: 'FairuFlatEntry';
  id: Scalars['ID']['output'];
  /** True if this is an empty folder (S3: 0-byte key with trailing /) */
  isFolder: Scalars['Boolean']['output'];
  /** MIME type (null for folders) */
  mime: Maybe<Scalars['String']['output']>;
  /** File or folder name */
  name: Scalars['String']['output'];
  /** Full path including name (e.g., 'marketing/2024/hero.jpg' or 'archive/') */
  path: Scalars['String']['output'];
  /** Size in bytes (0 for folders) */
  size: Scalars['Int']['output'];
  /** Last update timestamp */
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type FairuFolder = {
  __typename: 'FairuFolder';
  /** Get all files recursively from this folder and all subfolders */
  allAssets: Maybe<Array<FairuAsset>>;
  auto_assign_copyright: Maybe<Scalars['Boolean']['output']>;
  content: Maybe<FairuFolderList>;
  copyrights: Maybe<Array<Maybe<FairuCopyright>>>;
  created_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['DateTime']['output']>;
};


export type FairuFolderAllAssetsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
};


export type FairuFolderContentArgs = {
  folder: InputMaybe<Scalars['ID']['input']>;
  globalSearch: InputMaybe<Scalars['Boolean']['input']>;
  onlyFolder: InputMaybe<Scalars['Boolean']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  orderDirection: InputMaybe<FairuSortingDirection>;
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
};

export type FairuFolderDto = {
  autoAssignCopyright?: InputMaybe<Scalars['Boolean']['input']>;
  copyrightIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inhertiCopyrightAssignment?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
};

export type FairuFolderFilter = {
  mimeFilter?: InputMaybe<Scalars['String']['input']>;
  onlyAudio?: InputMaybe<Scalars['Boolean']['input']>;
  onlyImage?: InputMaybe<Scalars['Boolean']['input']>;
  onlyVideo?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FairuFolderList = {
  __typename: 'FairuFolderList';
  data: Maybe<Array<FairuEntry>>;
  paginatorInfo: Maybe<DefaultPaginator>;
};

export type FairuFolderUploadShareLink = {
  __typename: 'FairuFolderUploadShareLink';
  /** When the link expires (null if never) */
  expires_at: Maybe<Scalars['String']['output']>;
  /** The folder ID this link uploads to */
  folder_id: Scalars['ID']['output'];
  /** The ID of the upload share link */
  id: Scalars['ID']['output'];
  /** Optional name for the link */
  name: Maybe<Scalars['String']['output']>;
  /** The shareable URL that can be used to upload files */
  url: Scalars['String']['output'];
};

export type FairuGallery = {
  __typename: 'FairuGallery';
  active: Maybe<Scalars['Boolean']['output']>;
  copyright_text: Maybe<Scalars['String']['output']>;
  copyrights: Maybe<Array<FairuCopyright>>;
  cover_image: Maybe<FairuAsset>;
  date: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  exclude_from_list: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  items: Maybe<Array<FairuAsset>>;
  itemsPaginated: Maybe<FairuGalleryItemList>;
  location: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  sorting_direction: Maybe<Scalars['String']['output']>;
  sorting_field: Maybe<Scalars['String']['output']>;
};


export type FairuGalleryDescriptionArgs = {
  raw: InputMaybe<Scalars['Boolean']['input']>;
};


export type FairuGalleryItemsPaginatedArgs = {
  orderBy: InputMaybe<Scalars['String']['input']>;
  orderDirection: InputMaybe<Scalars['String']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
};

export type FairuGalleryDto = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exclude_from_list?: InputMaybe<Scalars['Boolean']['input']>;
  folder_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sorting_direction?: InputMaybe<FairuSortingDirection>;
  sorting_field?: InputMaybe<FairuGallerySortingField>;
};

export type FairuGalleryItemList = {
  __typename: 'FairuGalleryItemList';
  data: Maybe<Array<FairuAsset>>;
  paginatorInfo: Maybe<DefaultPaginator>;
};

export type FairuGalleryList = {
  __typename: 'FairuGalleryList';
  data: Maybe<Array<FairuGallery>>;
  paginatorInfo: Maybe<DefaultPaginator>;
};

export type FairuGallerySortingField =
  | 'CREATED_AT'
  | 'NAME';

export type FairuHealthStatus = {
  __typename: 'FairuHealthStatus';
  healthy: Maybe<Scalars['Boolean']['output']>;
  version: Maybe<Scalars['String']['output']>;
};

export type FairuLicense = {
  __typename: 'FairuLicense';
  active: Maybe<Scalars['Boolean']['output']>;
  copyright: Maybe<FairuCopyright>;
  created_at: Maybe<Scalars['DateTime']['output']>;
  days: Maybe<Scalars['Int']['output']>;
  default: Maybe<Scalars['Boolean']['output']>;
  end: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  interval: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
  replace_date: Maybe<Scalars['DateTime']['output']>;
  replace_license: Maybe<Scalars['Boolean']['output']>;
  replace_license_entry: Maybe<FairuLicense>;
  replaced_by_license_entry: Maybe<FairuLicense>;
  start: Maybe<Scalars['DateTime']['output']>;
  type: Maybe<FairuLicenseType>;
  updated_at: Maybe<Scalars['DateTime']['output']>;
};

export type FairuLicenseDto = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  copyright_id?: InputMaybe<Scalars['ID']['input']>;
  days?: InputMaybe<Scalars['Int']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  end?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  interval?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  replace_date?: InputMaybe<Scalars['DateTime']['input']>;
  replace_license?: InputMaybe<Scalars['Boolean']['input']>;
  replace_license_id?: InputMaybe<Scalars['ID']['input']>;
  start?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<FairuLicenseType>;
};

export type FairuLicenseList = {
  __typename: 'FairuLicenseList';
  data: Maybe<Array<FairuLicense>>;
  paginatorInfo: Maybe<DefaultPaginator>;
};

export type FairuLicenseType =
  | 'PERIOD'
  | 'STANDARD';

/** Presigned URL for uploading a single part */
export type FairuMultipartPart = {
  __typename: 'FairuMultipartPart';
  /** Part number (1-indexed) */
  partNumber: Scalars['Int']['output'];
  /** Presigned URL for PUT request */
  uploadUrl: Scalars['String']['output'];
};

/** Input type for multipart upload part completion */
export type FairuMultipartPartInput = {
  /** ETag returned by S3 after uploading the part */
  etag: Scalars['String']['input'];
  /** Part number (1-indexed) */
  partNumber: Scalars['Int']['input'];
};

/** Response from initializing a multipart upload */
export type FairuMultipartUploadInit = {
  __typename: 'FairuMultipartUploadInit';
  /** File ID */
  id: Scalars['ID']['output'];
  /** Size of each part in bytes (only if fileSize was provided) */
  partSize: Maybe<Scalars['Int']['output']>;
  /** Presigned URLs for uploading each part (only if fileSize was provided) */
  parts: Maybe<Array<FairuMultipartPart>>;
  /** URL to call after upload completion to sync metadata */
  sync_url: Scalars['String']['output'];
  /** Total number of parts (only if fileSize was provided) */
  totalParts: Maybe<Scalars['Int']['output']>;
  /** S3 Upload ID - required for completing the upload */
  uploadId: Scalars['String']['output'];
};

export type FairuPdfSignatureRequestStatus =
  | 'CANCELED'
  | 'CREATED'
  | 'DONE'
  | 'FAILED'
  | 'STARTED';

export type FairuRakuCredential = {
  __typename: 'FairuRakuCredential';
  access_key_id: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  bucket: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  expires_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  last_used_at: Maybe<Scalars['DateTime']['output']>;
  name: Maybe<Scalars['String']['output']>;
  permissions: Array<Scalars['String']['output']>;
};

export type FairuRakuCredentialWithSecret = {
  __typename: 'FairuRakuCredentialWithSecret';
  access_key_id: Scalars['String']['output'];
  bucket: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  permissions: Array<Scalars['String']['output']>;
  secret_access_key: Scalars['String']['output'];
};

export type FairuRole = {
  __typename: 'FairuRole';
  created_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  permissions: Maybe<Array<Scalars['String']['output']>>;
  updated_at: Maybe<Scalars['DateTime']['output']>;
};

export type FairuRoleDto = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FairuRoleList = {
  __typename: 'FairuRoleList';
  data: Maybe<Array<FairuRole>>;
  paginatorInfo: Maybe<DefaultPaginator>;
};

export type FairuSortingDirection =
  | 'ASC'
  | 'DESC';

export type FairuTenant = {
  __typename: 'FairuTenant';
  ai_language: Maybe<Scalars['String']['output']>;
  avatar: Maybe<FairuAsset>;
  /** Block files with error - if true, files with errors will not have a URL (default: true) */
  block_files_with_error: Maybe<Scalars['Boolean']['output']>;
  created_at: Maybe<Scalars['DateTime']['output']>;
  /** Custom domain */
  custom_domain: Maybe<Scalars['String']['output']>;
  /** Status of the custom domain creatoin process */
  custom_domain_status: Maybe<FairuCustomDomainStatus>;
  /** If this flag is true we have identified a valid CNAME entry */
  custom_domain_verified: Maybe<Scalars['Boolean']['output']>;
  /** File policy entry - should at least one copyright entry be enforced */
  force_filce_copyright: Maybe<Scalars['Boolean']['output']>;
  /** File policy entry - should alternative text for files be enforced */
  force_file_alt: Maybe<Scalars['Boolean']['output']>;
  /** File policy entry - should a caption text be enforced */
  force_file_caption: Maybe<Scalars['Boolean']['output']>;
  /** File policy entry - should a description be enforced */
  force_file_description: Maybe<Scalars['Boolean']['output']>;
  /** File policy active? */
  force_file_policy: Maybe<Scalars['Boolean']['output']>;
  /** Will license use enforced - if this flag is set to true - files without a valid license will be blocked */
  force_license: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  trial_ends_at: Maybe<Scalars['DateTime']['output']>;
  updated_at: Maybe<Scalars['DateTime']['output']>;
  use_ai: Maybe<Scalars['Boolean']['output']>;
  use_ai_onupload: Maybe<Scalars['Boolean']['output']>;
  webhook_authorization: Maybe<Scalars['String']['output']>;
  webhook_type: Maybe<FairuWebhookType>;
  webhook_url: Maybe<Scalars['String']['output']>;
};

/**
 * Result of creating a new tenant via the createFairuTenant mutation.
 *
 * This type contains all the information needed to start using the new tenant,
 * including a full-access API key that is only shown once.
 */
export type FairuTenantCreationResult = {
  __typename: 'FairuTenantCreationResult';
  /**
   * Full-access API key for the new tenant.
   *
   * IMPORTANT: This key is only shown once! Store it securely.
   * The key has all permissions and can be used immediately to:
   * - Upload and manage files
   * - Create folders
   * - Manage copyrights and licenses
   * - Configure tenant settings
   * - And more...
   *
   * If lost, generate a new key via the tenant settings or API.
   */
  api_key: Scalars['String']['output'];
  /** ISO 8601 timestamp when the tenant was created */
  created_at: Scalars['String']['output'];
  /** Unique identifier for the new tenant (UUID) */
  id: Scalars['ID']['output'];
  /** Name of the tenant */
  name: Scalars['String']['output'];
};

export type FairuUploadLink = {
  __typename: 'FairuUploadLink';
  /** This will be the ID for the File after uploading */
  id: Scalars['ID']['output'];
  /** Mime type is returned to help you identify the file type */
  mime: Maybe<Scalars['String']['output']>;
  /** Call this url via GET-Request after uploading. This step is required. */
  sync_url: Maybe<Scalars['String']['output']>;
  /** Use this url to upload the file */
  upload_url: Scalars['String']['output'];
};

export type FairuUploadShareLinkExpiration =
  | 'NEVER'
  | 'ONE_DAY'
  | 'ONE_HOUR'
  | 'SEVEN_DAYS'
  | 'SIX_HOURS'
  | 'THIRTY_DAYS';

export type FairuUploadType =
  | 'DOWNLOAD'
  | 'STANDARD';

export type FairuUser = {
  __typename: 'FairuUser';
  email: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['Boolean']['output']>;
  status: Maybe<FairuUserStatus>;
};

export type FairuUserList = {
  __typename: 'FairuUserList';
  data: Maybe<Array<FairuUser>>;
  paginatorInfo: Maybe<DefaultPaginator>;
};

export type FairuUserStatus =
  | 'ACCEPTED'
  | 'CREATED'
  | 'DECLINED'
  | 'PENDING';

export type FairuWebhookType =
  | 'BASIC'
  | 'BEARER'
  | 'NONE';

export type FairuWorkflow = {
  __typename: 'FairuWorkflow';
  active: Maybe<Scalars['Boolean']['output']>;
  created_at: Maybe<Scalars['DateTime']['output']>;
  has_error: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  last_at: Maybe<Scalars['DateTime']['output']>;
  name: Maybe<Scalars['String']['output']>;
  status: FairuWorkflowStatus;
  type: FairuWorkflowType;
  updated_at: Maybe<Scalars['DateTime']['output']>;
};

export type FairuWorkflowDto = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  structure?: InputMaybe<Scalars['WorkflowStructure']['input']>;
  type?: InputMaybe<FairuWorkflowType>;
};

export type FairuWorkflowList = {
  __typename: 'FairuWorkflowList';
  data: Maybe<Array<FairuWorkflow>>;
  paginatorInfo: Maybe<DefaultPaginator>;
};

export type FairuWorkflowStatus =
  | 'FAILED'
  | 'NONE'
  | 'PROCESSING'
  | 'SUCCESS'
  | 'TRIGGERED';

export type FairuWorkflowType =
  | 'COPYRIGHT_REPLACING'
  | 'COPYRIGHT_REPLACING_SEARCH'
  | 'COPYRIGHT_SPLITTING'
  | 'COPYRIGHT_SPLITTING_SEARCH';

export type Mutation = {
  __typename: 'Mutation';
  /** Abort a multipart upload and clean up */
  abortFairuMultipartUpload: Scalars['Boolean']['output'];
  /** Block a file */
  blockFairuFile: Maybe<Scalars['Boolean']['output']>;
  /** Cancel a pdf signatur request */
  cancelFairuPdfSignatureRequest: Maybe<Scalars['Boolean']['output']>;
  /** Complete a multipart upload after all parts have been uploaded */
  completeFairuMultipartUpload: FairuUploadLink;
  /** Create a copyright */
  createFairuCopyright: Maybe<FairuCopyright>;
  /** Create a sync disk entry */
  createFairuDisk: Maybe<FairuDisk>;
  /** Create a dcma complain */
  createFairuDmcaComplain: Maybe<Scalars['Boolean']['output']>;
  /** Generate HMAC access signatures for private files */
  createFairuFileAccessSignature: Array<FairuFileAccessSignature>;
  /** Create a folder */
  createFairuFolder: Maybe<FairuFolder>;
  /** Create a ftp connectoin to the folder */
  createFairuFolderFTP: Maybe<FairuDisk>;
  /** Create an upload share link for a folder - anyone with this link can upload files to the folder */
  createFairuFolderUploadShareLink: Maybe<FairuFolderUploadShareLink>;
  /** Create a gallery */
  createFairuGallery: Maybe<FairuGallery>;
  /** Create shareable gallery link */
  createFairuGalleryShareLink: Maybe<Scalars['String']['output']>;
  /** Create a license */
  createFairuLicense: Maybe<FairuLicense>;
  /** Create a pdf signatur request */
  createFairuPdfSignatureRequest: Maybe<FairuFilePdfSignatureRequest>;
  /** Create Raku credentials (S3-compatible storage) for the tenant */
  createFairuRakuCredential: FairuRakuCredentialWithSecret;
  /** Create a role */
  createFairuRole: Maybe<FairuRole>;
  /**
   * Create a new tenant (workspace) via API.
   *
   * This mutation is designed for programmatic tenant provisioning, typically used by:
   * - Partner integrations that need to create workspaces for their customers
   * - Automated onboarding systems
   * - White-label deployments
   *
   * ## Authentication
   *
   * Requires a special "provisioning token" with the `tenant::create` ability.
   * This is a global permission (not tied to any existing tenant).
   *
   * To obtain a provisioning token, contact your administrator or use the
   * admin panel to generate one for your user account.
   *
   * ## What happens on creation
   *
   * 1. A new tenant (workspace) is created with the given name
   * 2. The authenticated user becomes the owner with full admin rights
   * 3. A full-access API key is generated for the new tenant
   * 4. The API key is returned in the response (store it securely!)
   *
   * ## Response
   *
   * The mutation returns:
   * - `id`: The unique tenant ID (UUID)
   * - `name`: The tenant name
   * - `api_key`: A full-access API key for the new tenant (shown only once!)
   * - `created_at`: ISO 8601 timestamp
   *
   * ## Example
   *
   * ```graphql
   * mutation {
   *   createFairuTenant(name: "My New Workspace") {
   *     id
   *     name
   *     api_key
   *     created_at
   *   }
   * }
   * ```
   *
   * ## Important
   *
   * The `api_key` is only shown once in this response. Store it securely!
   * If lost, you'll need to generate a new one via the tenant settings.
   */
  createFairuTenant: FairuTenantCreationResult;
  createFairuUploadLink: Maybe<FairuUploadLink>;
  /** Create a workflow */
  createFairuWorkflow: Maybe<FairuWorkflow>;
  /** Delete a copyright entry */
  deleteFairuCopyright: Maybe<Scalars['Boolean']['output']>;
  /** Delete a disk */
  deleteFairuDisk: Maybe<Scalars['Boolean']['output']>;
  /** Delete a single file */
  deleteFairuFile: Maybe<Scalars['Boolean']['output']>;
  /** Delete a single folder */
  deleteFairuFolder: Maybe<Scalars['Boolean']['output']>;
  /** Delete a gallery */
  deleteFairuGallery: Maybe<Scalars['Boolean']['output']>;
  /** Delete a license entry */
  deleteFairuLicense: Maybe<Scalars['Boolean']['output']>;
  /** Delete Raku credentials permanently */
  deleteFairuRakuCredential: Scalars['Boolean']['output'];
  /** Delete a role */
  deleteFairuRole: Maybe<Scalars['Boolean']['output']>;
  /** Delete an user from the tenant - user will not be deleted by itself */
  deleteFairuUser: Maybe<Scalars['Boolean']['output']>;
  /** Delete a workflow */
  deleteFairuWorkflow: Maybe<Scalars['Boolean']['output']>;
  /** Duplicate a file */
  duplicateFairuFile: Maybe<Scalars['Boolean']['output']>;
  /**
   * Get the proxy URL for a file by its path (no authentication required).
   *
   * Returns null if:
   * - The tenant or file doesn't exist
   * - The file is private
   * - The file has errors (if block_files_with_error is enabled)
   *
   * ## Example
   *
   * ```graphql
   * mutation {
   *   fairuFileUrlByPath(
   *     tenant: "550e8400-e29b-41d4-a716-446655440000"
   *     path: "/marketing/hero.jpg"
   *     width: 800
   *     quality: 80
   *   )
   * }
   * ```
   */
  fairuFileUrlByPath: Maybe<Scalars['String']['output']>;
  /** Get a presigned URL for uploading a specific part (for S3 Gateway use) */
  getFairuMultipartPartUrl: FairuMultipartPart;
  /** Initialize a multipart upload for large files (>5MB) */
  initFairuMultipartUpload: FairuMultipartUploadInit;
  /** Invite an user to the tenant */
  inviteFairuUser: Maybe<Scalars['Boolean']['output']>;
  /** Move a file */
  moveFairuFile: Maybe<Scalars['Boolean']['output']>;
  /** Move a folder */
  moveFairuFolder: Maybe<Scalars['Boolean']['output']>;
  /** Trigger file download process */
  redownloadFairuFile: Maybe<Scalars['Boolean']['output']>;
  /** Rename a file */
  renameFairuFile: Maybe<FairuAsset>;
  /** Rename a folder */
  renameFairuFolder: Maybe<FairuFolder>;
  /** Create an upload link to replace an existing file's content in S3 */
  replaceFairuFile: Maybe<FairuUploadLink>;
  /** Revoke Raku credentials (deactivate but keep for audit) */
  revokeFairuRakuCredential: Scalars['Boolean']['output'];
  /** Start a pdf signatur request */
  startFairuPdfSignatureRequest: Maybe<FairuFilePdfSignatureRequest>;
  /** Remove block a file */
  unblockFairuFile: Maybe<Scalars['Boolean']['output']>;
  /** Update a copyright */
  updateFairuCopyright: Maybe<FairuCopyright>;
  /** Update a sync disk and it's meta data */
  updateFairuDisk: Maybe<FairuDisk>;
  /** Create a dcma complain */
  updateFairuDmcaComplain: Maybe<FairuDmca>;
  /** Update meta data for a file */
  updateFairuFile: Maybe<FairuAsset>;
  /** Update a folder and it's meta data */
  updateFairuFolder: Maybe<FairuFolder>;
  /** Update a gallery and it's meta data */
  updateFairuGallery: Maybe<FairuGallery>;
  /** Update a license */
  updateFairuLicense: Maybe<FairuLicense>;
  /** Update a role */
  updateFairuRole: Maybe<FairuRole>;
  /**
   * Update the current tenant's settings.
   *
   * Requires the `tenant::update` permission on the current tenant.
   * All fields are optional - only provided fields will be updated.
   *
   * ## Example
   *
   * ```graphql
   * mutation {
   *   updateFairuTenant(
   *     name: "My Renamed Workspace"
   *     use_ai: true
   *     force_file_alt: true
   *   ) {
   *     id
   *     name
   *     use_ai
   *   }
   * }
   * ```
   */
  updateFairuTenant: Maybe<FairuTenant>;
  /** Update a workflow and it's meta data */
  updateFairuWorkflow: Maybe<FairuWorkflow>;
};


export type MutationAbortFairuMultipartUploadArgs = {
  fileId: Scalars['ID']['input'];
  uploadId: Scalars['String']['input'];
};


export type MutationBlockFairuFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCancelFairuPdfSignatureRequestArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCompleteFairuMultipartUploadArgs = {
  fileId: Scalars['ID']['input'];
  parts: Array<FairuMultipartPartInput>;
  uploadId: Scalars['String']['input'];
};


export type MutationCreateFairuCopyrightArgs = {
  data: FairuCopyrightDto;
};


export type MutationCreateFairuDiskArgs = {
  data: FairuDiskDto;
};


export type MutationCreateFairuDmcaComplainArgs = {
  data: FairuDmcaComplainDto;
};


export type MutationCreateFairuFileAccessSignatureArgs = {
  ids: Array<Scalars['ID']['input']>;
  valid_for_minutes: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateFairuFolderArgs = {
  data: FairuFolderDto;
};


export type MutationCreateFairuFolderFtpArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateFairuFolderUploadShareLinkArgs = {
  expires_in: InputMaybe<FairuUploadShareLinkExpiration>;
  id: Scalars['ID']['input'];
  name: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateFairuGalleryArgs = {
  data: FairuGalleryDto;
};


export type MutationCreateFairuGalleryShareLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateFairuLicenseArgs = {
  data: FairuLicenseDto;
};


export type MutationCreateFairuPdfSignatureRequestArgs = {
  data: FairuFilePdfSignatureRequestDto;
};


export type MutationCreateFairuRakuCredentialArgs = {
  bucket: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  permissions: Array<Scalars['String']['input']>;
};


export type MutationCreateFairuRoleArgs = {
  data: FairuRoleDto;
};


export type MutationCreateFairuTenantArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateFairuUploadLinkArgs = {
  alt: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  copyright: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  download_url: InputMaybe<Scalars['String']['input']>;
  fileSize: InputMaybe<Scalars['Int']['input']>;
  filename: Scalars['String']['input'];
  focal_point: InputMaybe<Scalars['String']['input']>;
  folder: InputMaybe<Scalars['ID']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  type: InputMaybe<FairuUploadType>;
};


export type MutationCreateFairuWorkflowArgs = {
  data: FairuWorkflowDto;
};


export type MutationDeleteFairuCopyrightArgs = {
  deleteAssets: InputMaybe<Scalars['Boolean']['input']>;
  deleteLicenses: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationDeleteFairuDiskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFairuFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFairuFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFairuGalleryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFairuLicenseArgs = {
  deleteAssets: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationDeleteFairuRakuCredentialArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFairuRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFairuUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFairuWorkflowArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDuplicateFairuFileArgs = {
  id: Scalars['ID']['input'];
  parent: InputMaybe<Scalars['ID']['input']>;
};


export type MutationFairuFileUrlByPathArgs = {
  focal_point: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  path: Scalars['String']['input'];
  quality: InputMaybe<Scalars['Int']['input']>;
  tenant: Scalars['ID']['input'];
  version: InputMaybe<FairuAssetVideoVersions>;
  width: InputMaybe<Scalars['Int']['input']>;
  withStoredFocalPoint: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationGetFairuMultipartPartUrlArgs = {
  fileId: Scalars['ID']['input'];
  partNumber: Scalars['Int']['input'];
  uploadId: Scalars['String']['input'];
};


export type MutationInitFairuMultipartUploadArgs = {
  alt: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  contentType: InputMaybe<Scalars['String']['input']>;
  copyright: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  fileSize: InputMaybe<Scalars['Int']['input']>;
  filename: Scalars['String']['input'];
  folder: InputMaybe<Scalars['ID']['input']>;
};


export type MutationInviteFairuUserArgs = {
  email: Scalars['String']['input'];
  role: Scalars['ID']['input'];
};


export type MutationMoveFairuFileArgs = {
  id: Scalars['ID']['input'];
  parent: InputMaybe<Scalars['ID']['input']>;
};


export type MutationMoveFairuFolderArgs = {
  id: Scalars['ID']['input'];
  parent: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRedownloadFairuFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRenameFairuFileArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameFairuFolderArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationReplaceFairuFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRevokeFairuRakuCredentialArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStartFairuPdfSignatureRequestArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnblockFairuFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateFairuCopyrightArgs = {
  data: FairuCopyrightDto;
};


export type MutationUpdateFairuDiskArgs = {
  data: FairuDiskDto;
};


export type MutationUpdateFairuDmcaComplainArgs = {
  data: FairuDmcaDto;
};


export type MutationUpdateFairuFileArgs = {
  data: FairuFileDto;
};


export type MutationUpdateFairuFolderArgs = {
  data: FairuFolderDto;
};


export type MutationUpdateFairuGalleryArgs = {
  data: FairuGalleryDto;
};


export type MutationUpdateFairuLicenseArgs = {
  data: FairuLicenseDto;
};


export type MutationUpdateFairuRoleArgs = {
  data: FairuRoleDto;
};


export type MutationUpdateFairuTenantArgs = {
  ai_blur_faces: InputMaybe<Scalars['Boolean']['input']>;
  ai_language: InputMaybe<Scalars['String']['input']>;
  ai_nsfw: InputMaybe<Scalars['Boolean']['input']>;
  avatar_id: InputMaybe<Scalars['ID']['input']>;
  block_files_with_error: InputMaybe<Scalars['Boolean']['input']>;
  custom_domain: InputMaybe<Scalars['String']['input']>;
  force_file_alt: InputMaybe<Scalars['Boolean']['input']>;
  force_file_caption: InputMaybe<Scalars['Boolean']['input']>;
  force_file_copyright: InputMaybe<Scalars['Boolean']['input']>;
  force_file_description: InputMaybe<Scalars['Boolean']['input']>;
  force_file_policy: InputMaybe<Scalars['Boolean']['input']>;
  force_license: InputMaybe<Scalars['Boolean']['input']>;
  hide_dotfiles: InputMaybe<Scalars['Boolean']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  use_ai: InputMaybe<Scalars['Boolean']['input']>;
  use_ai_onupload: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateFairuWorkflowArgs = {
  data: FairuWorkflowDto;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export type OrderByRelationAggregateFunction =
  /** Amount of items. */
  | 'COUNT';

/** Aggregate functions when ordering by a relation that may specify a column. */
export type OrderByRelationWithColumnAggregateFunction =
  /** Average. */
  | 'AVG'
  /** Amount of items. */
  | 'COUNT'
  /** Maximum. */
  | 'MAX'
  /** Minimum. */
  | 'MIN'
  /** Sum. */
  | 'SUM';

export type Query = {
  __typename: 'Query';
  /** Get all files AND empty folders with full path, cursor-paginated for S3-compatible listing (max 5000 entries per page) */
  fairuAllFilesFlat: FairuAllFilesFlatResult;
  /** Get a single copyright entry in the tenant */
  fairuCopyright: Maybe<FairuCopyright>;
  /** Get a list of copyrights for the tenant */
  fairuCopyrights: Maybe<FairuCopyrightList>;
  /** Get a single sync disk configuration */
  fairuDisk: Maybe<FairuDisk>;
  /** Get a single sync disk status */
  fairuDiskStatus: Maybe<FairuDiskStatus>;
  /** Get a list of sync configuration for the tenant */
  fairuDisks: Maybe<FairuDiskList>;
  /** Get a single dmca report */
  fairuDmca: Maybe<FairuDmca>;
  /** Get a list of sync configuration for the tenant */
  fairuDmcas: Maybe<FairuDmcaList>;
  /** Get a single file data */
  fairuFile: Maybe<FairuAsset>;
  /** Get a single file by its path (e.g., '/marketing/2024/hero.jpg') */
  fairuFileByPath: Maybe<FairuAsset>;
  /** Get only the files for a folder */
  fairuFiles: Maybe<FairuAssetList>;
  /** Calculate total size in bytes for a list of file IDs (max 2000) */
  fairuFilesTotalSize: Scalars['Int']['output'];
  /** Get the folder data (files and folder) for a folder */
  fairuFolder: Maybe<FairuFolderList>;
  /** Get a single folder by its path (e.g., '/marketing/2024/summer') */
  fairuFolderByPath: Maybe<FairuFolder>;
  /** Get list of galleries that should be displayed */
  fairuGalleries: Maybe<FairuGalleryList>;
  /** Get single gallery */
  fairuGallery: Maybe<FairuGallery>;
  /** Simple health check query */
  fairuHealthCheck: Maybe<FairuHealthStatus>;
  /** Get a single license information */
  fairuLicense: Maybe<FairuLicense>;
  /** Get a list of licenses defined in the tenant */
  fairuLicenses: Maybe<FairuLicenseList>;
  /** Get a list of files */
  fairuMultipleFiles: Maybe<Array<Maybe<FairuAsset>>>;
  /** Get a list of Raku credentials (S3-compatible storage) for the tenant */
  fairuRakuCredentials: Array<FairuRakuCredential>;
  /** Get a single role information */
  fairuRole: Maybe<FairuRole>;
  /** Get a list of roles defined in the tenant */
  fairuRoles: Maybe<FairuRoleList>;
  /** Search globally in the tenant */
  fairuSearch: Maybe<FairuAssetList>;
  /** Get all supported domains (default proxy + verified custom domains). Cached for 5-15 minutes. */
  fairuSupportedDomains: Array<Scalars['String']['output']>;
  /** Get the information of the current tenant */
  fairuTenant: Maybe<FairuTenant>;
  /** Get the information of a fairu user withing the tenant */
  fairuUser: Maybe<FairuUser>;
  /** Get a list of users attached to the tenant */
  fairuUsers: Maybe<FairuUserList>;
  /** Get a single workflow information */
  fairuWorkflow: Maybe<FairuWorkflow>;
  /** Get a list of defined workflows of the tenant */
  fairuWorkflows: Maybe<FairuWorkflowList>;
};


export type QueryFairuAllFilesFlatArgs = {
  afterCursor: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFairuCopyrightArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFairuCopyrightsArgs = {
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFairuDiskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFairuDiskStatusArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFairuDisksArgs = {
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFairuDmcaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFairuDmcasArgs = {
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFairuFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFairuFileByPathArgs = {
  path: Scalars['String']['input'];
};


export type QueryFairuFilesArgs = {
  folder: InputMaybe<Scalars['ID']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFairuFilesTotalSizeArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryFairuFolderArgs = {
  folder: InputMaybe<Scalars['ID']['input']>;
  globalSearch: InputMaybe<Scalars['Boolean']['input']>;
  onlyFolder: InputMaybe<Scalars['Boolean']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  orderDirection: InputMaybe<FairuSortingDirection>;
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryFairuFolderByPathArgs = {
  path: Scalars['String']['input'];
};


export type QueryFairuGalleriesArgs = {
  from: InputMaybe<Scalars['String']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  orderDirection: InputMaybe<Scalars['String']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  tenants: Array<Scalars['ID']['input']>;
  until: InputMaybe<Scalars['String']['input']>;
};


export type QueryFairuGalleryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFairuLicenseArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFairuLicensesArgs = {
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFairuMultipleFilesArgs = {
  ids: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryFairuRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFairuRolesArgs = {
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFairuSearchArgs = {
  orderBy: InputMaybe<Scalars['String']['input']>;
  orderDirection: InputMaybe<FairuSortingDirection>;
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryFairuUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFairuUsersArgs = {
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFairuWorkflowArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFairuWorkflowsArgs = {
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
};

/** Directions for ordering a list of records. */
export type SortOrder =
  /** Sort records in ascending order. */
  | 'ASC'
  /** Sort records in descending order. */
  | 'DESC';

/** Specify if you want to include or exclude trashed results from a query. */
export type Trashed =
  /** Only return trashed results. */
  | 'ONLY'
  /** Return both trashed and non-trashed results. */
  | 'WITH'
  /** Only return non-trashed results. */
  | 'WITHOUT';

export type UpdateFairuFileMutationVariables = Exact<{
  data: FairuFileDto;
}>;


export type UpdateFairuFileMutation = { __typename: 'Mutation', updateFairuFile: { __typename: 'FairuAsset', id: string, name: string | null, alt: string | null, caption: string | null, description: string | null, focal_point: string | null, blocked: boolean | null, updated_at: string | null, copyrights: Array<{ __typename: 'FairuCopyright', id: string, name: string | null }> | null, licenses: Array<{ __typename: 'FairuLicense', id: string, name: string | null }> | null } | null };

export type DeleteFairuFileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFairuFileMutation = { __typename: 'Mutation', deleteFairuFile: boolean | null };

export type BlockFairuFileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BlockFairuFileMutation = { __typename: 'Mutation', blockFairuFile: boolean | null };

export type UnblockFairuFileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UnblockFairuFileMutation = { __typename: 'Mutation', unblockFairuFile: boolean | null };

export type RenameFairuFileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameFairuFileMutation = { __typename: 'Mutation', renameFairuFile: { __typename: 'FairuAsset', id: string, name: string | null, updated_at: string | null } | null };

export type MoveFairuFileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  parent: InputMaybe<Scalars['ID']['input']>;
}>;


export type MoveFairuFileMutation = { __typename: 'Mutation', moveFairuFile: boolean | null };

export type DuplicateFairuFileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  parent: InputMaybe<Scalars['ID']['input']>;
}>;


export type DuplicateFairuFileMutation = { __typename: 'Mutation', duplicateFairuFile: boolean | null };

export type RedownloadFairuFileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RedownloadFairuFileMutation = { __typename: 'Mutation', redownloadFairuFile: boolean | null };

export type ReplaceFairuFileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReplaceFairuFileMutation = { __typename: 'Mutation', replaceFairuFile: { __typename: 'FairuUploadLink', id: string, upload_url: string, sync_url: string | null, mime: string | null } | null };

export type FairuFileUrlByPathMutationVariables = Exact<{
  tenant: Scalars['ID']['input'];
  path: Scalars['String']['input'];
  width: InputMaybe<Scalars['Int']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  focal_point: InputMaybe<Scalars['String']['input']>;
  withStoredFocalPoint: InputMaybe<Scalars['Boolean']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  version: InputMaybe<FairuAssetVideoVersions>;
}>;


export type FairuFileUrlByPathMutation = { __typename: 'Mutation', fairuFileUrlByPath: string | null };

export type CreateFairuCopyrightMutationVariables = Exact<{
  data: FairuCopyrightDto;
}>;


export type CreateFairuCopyrightMutation = { __typename: 'Mutation', createFairuCopyright: { __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, phone: string | null, website: string | null, active: boolean | null, blocked: boolean | null, created_at: string | null } | null };

export type UpdateFairuCopyrightMutationVariables = Exact<{
  data: FairuCopyrightDto;
}>;


export type UpdateFairuCopyrightMutation = { __typename: 'Mutation', updateFairuCopyright: { __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, phone: string | null, website: string | null, active: boolean | null, blocked: boolean | null, updated_at: string | null } | null };

export type DeleteFairuCopyrightMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  deleteAssets: InputMaybe<Scalars['Boolean']['input']>;
  deleteLicenses: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type DeleteFairuCopyrightMutation = { __typename: 'Mutation', deleteFairuCopyright: boolean | null };

export type CreateFairuDiskMutationVariables = Exact<{
  data: FairuDiskDto;
}>;


export type CreateFairuDiskMutation = { __typename: 'Mutation', createFairuDisk: { __typename: 'FairuDisk', id: string, name: string | null, type: FairuDiskType | null, path: string | null, pattern: string | null, delete_at_origin: boolean | null, healthy: boolean | null, active: boolean | null, created_at: string | null } | null };

export type UpdateFairuDiskMutationVariables = Exact<{
  data: FairuDiskDto;
}>;


export type UpdateFairuDiskMutation = { __typename: 'Mutation', updateFairuDisk: { __typename: 'FairuDisk', id: string, name: string | null, type: FairuDiskType | null, path: string | null, pattern: string | null, delete_at_origin: boolean | null, healthy: boolean | null, active: boolean | null, updated_at: string | null } | null };

export type DeleteFairuDiskMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFairuDiskMutation = { __typename: 'Mutation', deleteFairuDisk: boolean | null };

export type CreateFairuDmcaComplainMutationVariables = Exact<{
  data: FairuDmcaComplainDto;
}>;


export type CreateFairuDmcaComplainMutation = { __typename: 'Mutation', createFairuDmcaComplain: boolean | null };

export type UpdateFairuDmcaComplainMutationVariables = Exact<{
  data: FairuDmcaDto;
}>;


export type UpdateFairuDmcaComplainMutation = { __typename: 'Mutation', updateFairuDmcaComplain: { __typename: 'FairuDmca', id: string, name: string | null, email: string | null, reply: string | null, reply_send: boolean | null, status: FairuDmcaStatus | null } | null };

export type CreateFairuFolderMutationVariables = Exact<{
  data: FairuFolderDto;
}>;


export type CreateFairuFolderMutation = { __typename: 'Mutation', createFairuFolder: { __typename: 'FairuFolder', id: string, name: string | null, auto_assign_copyright: boolean | null, created_at: string | null } | null };

export type UpdateFairuFolderMutationVariables = Exact<{
  data: FairuFolderDto;
}>;


export type UpdateFairuFolderMutation = { __typename: 'Mutation', updateFairuFolder: { __typename: 'FairuFolder', id: string, name: string | null, auto_assign_copyright: boolean | null, updated_at: string | null, copyrights: Array<{ __typename: 'FairuCopyright', id: string, name: string | null } | null> | null } | null };

export type DeleteFairuFolderMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFairuFolderMutation = { __typename: 'Mutation', deleteFairuFolder: boolean | null };

export type RenameFairuFolderMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameFairuFolderMutation = { __typename: 'Mutation', renameFairuFolder: { __typename: 'FairuFolder', id: string, name: string | null, updated_at: string | null } | null };

export type MoveFairuFolderMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  parent: InputMaybe<Scalars['ID']['input']>;
}>;


export type MoveFairuFolderMutation = { __typename: 'Mutation', moveFairuFolder: boolean | null };

export type CreateFairuFolderFtpMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CreateFairuFolderFtpMutation = { __typename: 'Mutation', createFairuFolderFTP: { __typename: 'FairuDisk', id: string, name: string | null, type: FairuDiskType | null, path: string | null, active: boolean | null, healthy: boolean | null } | null };

export type CreateFairuGalleryMutationVariables = Exact<{
  data: FairuGalleryDto;
}>;


export type CreateFairuGalleryMutation = { __typename: 'Mutation', createFairuGallery: { __typename: 'FairuGallery', id: string, name: string | null, description: string | null, date: string | null, location: string | null, sorting_direction: string | null, sorting_field: string | null, active: boolean | null, exclude_from_list: boolean | null } | null };

export type UpdateFairuGalleryMutationVariables = Exact<{
  data: FairuGalleryDto;
}>;


export type UpdateFairuGalleryMutation = { __typename: 'Mutation', updateFairuGallery: { __typename: 'FairuGallery', id: string, name: string | null, description: string | null, date: string | null, location: string | null, sorting_direction: string | null, sorting_field: string | null, active: boolean | null, exclude_from_list: boolean | null } | null };

export type DeleteFairuGalleryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFairuGalleryMutation = { __typename: 'Mutation', deleteFairuGallery: boolean | null };

export type CreateFairuGalleryShareLinkMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CreateFairuGalleryShareLinkMutation = { __typename: 'Mutation', createFairuGalleryShareLink: string | null };

export type CreateFairuLicenseMutationVariables = Exact<{
  data: FairuLicenseDto;
}>;


export type CreateFairuLicenseMutation = { __typename: 'Mutation', createFairuLicense: { __typename: 'FairuLicense', id: string, name: string | null, type: FairuLicenseType | null, interval: number | null, default: boolean | null, active: boolean | null, start: string | null, end: string | null, days: number | null, replace_license: boolean | null, replace_date: string | null, created_at: string | null, copyright: { __typename: 'FairuCopyright', id: string, name: string | null } | null } | null };

export type UpdateFairuLicenseMutationVariables = Exact<{
  data: FairuLicenseDto;
}>;


export type UpdateFairuLicenseMutation = { __typename: 'Mutation', updateFairuLicense: { __typename: 'FairuLicense', id: string, name: string | null, type: FairuLicenseType | null, interval: number | null, default: boolean | null, active: boolean | null, start: string | null, end: string | null, days: number | null, replace_license: boolean | null, replace_date: string | null, updated_at: string | null, copyright: { __typename: 'FairuCopyright', id: string, name: string | null } | null } | null };

export type DeleteFairuLicenseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  deleteAssets: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type DeleteFairuLicenseMutation = { __typename: 'Mutation', deleteFairuLicense: boolean | null };

export type CreateFairuPdfSignatureRequestMutationVariables = Exact<{
  data: FairuFilePdfSignatureRequestDto;
}>;


export type CreateFairuPdfSignatureRequestMutation = { __typename: 'Mutation', createFairuPdfSignatureRequest: { __typename: 'FairuFilePdfSignatureRequest', id: string, status: FairuPdfSignatureRequestStatus | null, emails: Array<string | null> | null, config_url: string | null, signature_id: string | null, file: { __typename: 'FairuAsset', id: string, name: string | null, url: string | null } | null } | null };

export type StartFairuPdfSignatureRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type StartFairuPdfSignatureRequestMutation = { __typename: 'Mutation', startFairuPdfSignatureRequest: { __typename: 'FairuFilePdfSignatureRequest', id: string, status: FairuPdfSignatureRequestStatus | null, config_url: string | null, signature_id: string | null } | null };

export type CancelFairuPdfSignatureRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CancelFairuPdfSignatureRequestMutation = { __typename: 'Mutation', cancelFairuPdfSignatureRequest: boolean | null };

export type CreateFairuRakuCredentialMutationVariables = Exact<{
  name: InputMaybe<Scalars['String']['input']>;
  bucket: InputMaybe<Scalars['String']['input']>;
  permissions: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type CreateFairuRakuCredentialMutation = { __typename: 'Mutation', createFairuRakuCredential: { __typename: 'FairuRakuCredentialWithSecret', id: string, name: string | null, access_key_id: string, secret_access_key: string, bucket: string | null, permissions: Array<string> } };

export type RevokeFairuRakuCredentialMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RevokeFairuRakuCredentialMutation = { __typename: 'Mutation', revokeFairuRakuCredential: boolean };

export type DeleteFairuRakuCredentialMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFairuRakuCredentialMutation = { __typename: 'Mutation', deleteFairuRakuCredential: boolean };

export type CreateFairuRoleMutationVariables = Exact<{
  data: FairuRoleDto;
}>;


export type CreateFairuRoleMutation = { __typename: 'Mutation', createFairuRole: { __typename: 'FairuRole', id: string, name: string | null, permissions: Array<string> | null, created_at: string | null } | null };

export type UpdateFairuRoleMutationVariables = Exact<{
  data: FairuRoleDto;
}>;


export type UpdateFairuRoleMutation = { __typename: 'Mutation', updateFairuRole: { __typename: 'FairuRole', id: string, name: string | null, permissions: Array<string> | null, updated_at: string | null } | null };

export type DeleteFairuRoleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFairuRoleMutation = { __typename: 'Mutation', deleteFairuRole: boolean | null };

export type CreateFairuTenantMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateFairuTenantMutation = { __typename: 'Mutation', createFairuTenant: { __typename: 'FairuTenantCreationResult', id: string, name: string, api_key: string, created_at: string } };

export type UpdateFairuTenantMutationVariables = Exact<{
  name: InputMaybe<Scalars['String']['input']>;
  force_license: InputMaybe<Scalars['Boolean']['input']>;
  use_ai: InputMaybe<Scalars['Boolean']['input']>;
  use_ai_onupload: InputMaybe<Scalars['Boolean']['input']>;
  avatar_id: InputMaybe<Scalars['ID']['input']>;
  ai_language: InputMaybe<Scalars['String']['input']>;
  ai_nsfw: InputMaybe<Scalars['Boolean']['input']>;
  ai_blur_faces: InputMaybe<Scalars['Boolean']['input']>;
  force_file_alt: InputMaybe<Scalars['Boolean']['input']>;
  force_file_description: InputMaybe<Scalars['Boolean']['input']>;
  force_file_caption: InputMaybe<Scalars['Boolean']['input']>;
  force_file_copyright: InputMaybe<Scalars['Boolean']['input']>;
  force_file_policy: InputMaybe<Scalars['Boolean']['input']>;
  block_files_with_error: InputMaybe<Scalars['Boolean']['input']>;
  custom_domain: InputMaybe<Scalars['String']['input']>;
  hide_dotfiles: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateFairuTenantMutation = { __typename: 'Mutation', updateFairuTenant: { __typename: 'FairuTenant', id: string, name: string | null, use_ai: boolean | null, use_ai_onupload: boolean | null, ai_language: string | null, force_file_alt: boolean | null, force_file_description: boolean | null, force_file_caption: boolean | null, force_filce_copyright: boolean | null, force_file_policy: boolean | null, block_files_with_error: boolean | null, force_license: boolean | null, custom_domain: string | null, custom_domain_verified: boolean | null, custom_domain_status: FairuCustomDomainStatus | null, webhook_url: string | null, webhook_type: FairuWebhookType | null, updated_at: string | null } | null };

export type CreateFairuUploadLinkMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  type: InputMaybe<FairuUploadType>;
  download_url: InputMaybe<Scalars['String']['input']>;
  folder: InputMaybe<Scalars['ID']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  fileSize: InputMaybe<Scalars['Int']['input']>;
  alt: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  focal_point: InputMaybe<Scalars['String']['input']>;
  copyright: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateFairuUploadLinkMutation = { __typename: 'Mutation', createFairuUploadLink: { __typename: 'FairuUploadLink', id: string, upload_url: string, sync_url: string | null, mime: string | null } | null };

export type InitFairuMultipartUploadMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  folder: InputMaybe<Scalars['ID']['input']>;
  fileSize: InputMaybe<Scalars['Int']['input']>;
  contentType: InputMaybe<Scalars['String']['input']>;
  alt: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  copyright: InputMaybe<Scalars['String']['input']>;
}>;


export type InitFairuMultipartUploadMutation = { __typename: 'Mutation', initFairuMultipartUpload: { __typename: 'FairuMultipartUploadInit', id: string, uploadId: string, partSize: number | null, totalParts: number | null, sync_url: string, parts: Array<{ __typename: 'FairuMultipartPart', partNumber: number, uploadUrl: string }> | null } };

export type GetFairuMultipartPartUrlMutationVariables = Exact<{
  fileId: Scalars['ID']['input'];
  uploadId: Scalars['String']['input'];
  partNumber: Scalars['Int']['input'];
}>;


export type GetFairuMultipartPartUrlMutation = { __typename: 'Mutation', getFairuMultipartPartUrl: { __typename: 'FairuMultipartPart', partNumber: number, uploadUrl: string } };

export type CompleteFairuMultipartUploadMutationVariables = Exact<{
  fileId: Scalars['ID']['input'];
  uploadId: Scalars['String']['input'];
  parts: Array<FairuMultipartPartInput> | FairuMultipartPartInput;
}>;


export type CompleteFairuMultipartUploadMutation = { __typename: 'Mutation', completeFairuMultipartUpload: { __typename: 'FairuUploadLink', id: string, upload_url: string, sync_url: string | null, mime: string | null } };

export type AbortFairuMultipartUploadMutationVariables = Exact<{
  fileId: Scalars['ID']['input'];
  uploadId: Scalars['String']['input'];
}>;


export type AbortFairuMultipartUploadMutation = { __typename: 'Mutation', abortFairuMultipartUpload: boolean };

export type CreateFairuFolderUploadShareLinkMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  expires_in: InputMaybe<FairuUploadShareLinkExpiration>;
  name: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateFairuFolderUploadShareLinkMutation = { __typename: 'Mutation', createFairuFolderUploadShareLink: { __typename: 'FairuFolderUploadShareLink', id: string, url: string, expires_at: string | null, name: string | null, folder_id: string } | null };

export type CreateFairuFileAccessSignatureMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  valid_for_minutes: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateFairuFileAccessSignatureMutation = { __typename: 'Mutation', createFairuFileAccessSignature: Array<{ __typename: 'FairuFileAccessSignature', file_id: string, signature: string, expires_at: string }> };

export type InviteFairuUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  role: Scalars['ID']['input'];
}>;


export type InviteFairuUserMutation = { __typename: 'Mutation', inviteFairuUser: boolean | null };

export type DeleteFairuUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFairuUserMutation = { __typename: 'Mutation', deleteFairuUser: boolean | null };

export type CreateFairuWorkflowMutationVariables = Exact<{
  data: FairuWorkflowDto;
}>;


export type CreateFairuWorkflowMutation = { __typename: 'Mutation', createFairuWorkflow: { __typename: 'FairuWorkflow', id: string, name: string | null, type: FairuWorkflowType, active: boolean | null, status: FairuWorkflowStatus, created_at: string | null } | null };

export type UpdateFairuWorkflowMutationVariables = Exact<{
  data: FairuWorkflowDto;
}>;


export type UpdateFairuWorkflowMutation = { __typename: 'Mutation', updateFairuWorkflow: { __typename: 'FairuWorkflow', id: string, name: string | null, type: FairuWorkflowType, active: boolean | null, status: FairuWorkflowStatus, updated_at: string | null } | null };

export type DeleteFairuWorkflowMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFairuWorkflowMutation = { __typename: 'Mutation', deleteFairuWorkflow: boolean | null };

export type AssetCoreFragment = { __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, alt: string | null, caption: string | null, description: string | null, copyright_text: string | null, url: string | null, width: number | null, height: number | null, original_width: number | null, original_height: number | null, blurhash: string | null, focal_point: string | null, blocked: boolean | null, has_error: boolean | null, size: number | null, versions: Array<FairuAssetVideoVersions> | null, created_at: string | null, updated_at: string | null };

export type AssetWithRelationsFragment = { __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, alt: string | null, caption: string | null, description: string | null, copyright_text: string | null, url: string | null, width: number | null, height: number | null, original_width: number | null, original_height: number | null, blurhash: string | null, focal_point: string | null, blocked: boolean | null, has_error: boolean | null, size: number | null, versions: Array<FairuAssetVideoVersions> | null, created_at: string | null, updated_at: string | null, copyrights: Array<{ __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, website: string | null, active: boolean | null, blocked: boolean | null }> | null, licenses: Array<{ __typename: 'FairuLicense', id: string, name: string | null, type: FairuLicenseType | null, start: string | null, end: string | null, active: boolean | null }> | null };

export type FairuFileQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FairuFileQuery = { __typename: 'Query', fairuFile: { __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, alt: string | null, caption: string | null, description: string | null, copyright_text: string | null, url: string | null, width: number | null, height: number | null, original_width: number | null, original_height: number | null, blurhash: string | null, focal_point: string | null, blocked: boolean | null, has_error: boolean | null, size: number | null, versions: Array<FairuAssetVideoVersions> | null, created_at: string | null, updated_at: string | null, copyrights: Array<{ __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, website: string | null, active: boolean | null, blocked: boolean | null }> | null, licenses: Array<{ __typename: 'FairuLicense', id: string, name: string | null, type: FairuLicenseType | null, start: string | null, end: string | null, active: boolean | null }> | null } | null };

export type FairuFileByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type FairuFileByPathQuery = { __typename: 'Query', fairuFileByPath: { __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, alt: string | null, caption: string | null, description: string | null, copyright_text: string | null, url: string | null, width: number | null, height: number | null, original_width: number | null, original_height: number | null, blurhash: string | null, focal_point: string | null, blocked: boolean | null, has_error: boolean | null, size: number | null, versions: Array<FairuAssetVideoVersions> | null, created_at: string | null, updated_at: string | null, copyrights: Array<{ __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, website: string | null, active: boolean | null, blocked: boolean | null }> | null, licenses: Array<{ __typename: 'FairuLicense', id: string, name: string | null, type: FairuLicenseType | null, start: string | null, end: string | null, active: boolean | null }> | null } | null };

export type FairuFilesQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
  folder: InputMaybe<Scalars['ID']['input']>;
}>;


export type FairuFilesQuery = { __typename: 'Query', fairuFiles: { __typename: 'FairuAssetList', data: Array<{ __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, alt: string | null, caption: string | null, description: string | null, copyright_text: string | null, url: string | null, width: number | null, height: number | null, original_width: number | null, original_height: number | null, blurhash: string | null, focal_point: string | null, blocked: boolean | null, has_error: boolean | null, size: number | null, versions: Array<FairuAssetVideoVersions> | null, created_at: string | null, updated_at: string | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null };

export type FairuMultipleFilesQueryVariables = Exact<{
  ids: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type FairuMultipleFilesQuery = { __typename: 'Query', fairuMultipleFiles: Array<{ __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, alt: string | null, caption: string | null, description: string | null, copyright_text: string | null, url: string | null, width: number | null, height: number | null, original_width: number | null, original_height: number | null, blurhash: string | null, focal_point: string | null, blocked: boolean | null, has_error: boolean | null, size: number | null, versions: Array<FairuAssetVideoVersions> | null, created_at: string | null, updated_at: string | null } | null> | null };

export type FairuFilesTotalSizeQueryVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type FairuFilesTotalSizeQuery = { __typename: 'Query', fairuFilesTotalSize: number };

export type FairuSearchQueryVariables = Exact<{
  search: Scalars['String']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  orderDirection: InputMaybe<FairuSortingDirection>;
}>;


export type FairuSearchQuery = { __typename: 'Query', fairuSearch: { __typename: 'FairuAssetList', data: Array<{ __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, alt: string | null, caption: string | null, description: string | null, copyright_text: string | null, url: string | null, width: number | null, height: number | null, original_width: number | null, original_height: number | null, blurhash: string | null, focal_point: string | null, blocked: boolean | null, has_error: boolean | null, size: number | null, versions: Array<FairuAssetVideoVersions> | null, created_at: string | null, updated_at: string | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null };

export type FairuAllFilesFlatQueryVariables = Exact<{
  afterCursor: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
}>;


export type FairuAllFilesFlatQuery = { __typename: 'Query', fairuAllFilesFlat: { __typename: 'FairuAllFilesFlatResult', nextCursor: string | null, hasMore: boolean, entries: Array<{ __typename: 'FairuFlatEntry', id: string, name: string, path: string, size: number, mime: string | null, isFolder: boolean, updatedAt: string | null }> } };

export type CopyrightCoreFragment = { __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, phone: string | null, website: string | null, active: boolean | null, blocked: boolean | null, created_at: string | null, updated_at: string | null };

export type FairuCopyrightsQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
}>;


export type FairuCopyrightsQuery = { __typename: 'Query', fairuCopyrights: { __typename: 'FairuCopyrightList', data: Array<{ __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, phone: string | null, website: string | null, active: boolean | null, blocked: boolean | null, created_at: string | null, updated_at: string | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null };

export type FairuCopyrightQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;


export type FairuCopyrightQuery = { __typename: 'Query', fairuCopyright: { __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, phone: string | null, website: string | null, active: boolean | null, blocked: boolean | null, created_at: string | null, updated_at: string | null } | null };

export type DiskCoreFragment = { __typename: 'FairuDisk', id: string, name: string | null, type: FairuDiskType | null, path: string | null, pattern: string | null, delete_at_origin: boolean | null, healthy: boolean | null, syncing: boolean | null, active: boolean | null, created_at: string | null, updated_at: string | null };

export type DiskWithCredentialsFragment = { __typename: 'FairuDisk', id: string, name: string | null, type: FairuDiskType | null, path: string | null, pattern: string | null, delete_at_origin: boolean | null, healthy: boolean | null, syncing: boolean | null, active: boolean | null, created_at: string | null, updated_at: string | null, folder: { __typename: 'FairuFolder', id: string, name: string | null } | null, credentials: { __typename: 'FairuDiskFTPCredentials', ftp_host: string | null, ftp_port: number | null, ftp_username: string | null } | { __typename: 'FairuDiskS3Credentials', key: string | null, region: string | null, bucket: string | null, endpoint: string | null, url: string | null } | null };

export type FairuDisksQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
}>;


export type FairuDisksQuery = { __typename: 'Query', fairuDisks: { __typename: 'FairuDiskList', data: Array<{ __typename: 'FairuDisk', id: string, name: string | null, type: FairuDiskType | null, path: string | null, pattern: string | null, delete_at_origin: boolean | null, healthy: boolean | null, syncing: boolean | null, active: boolean | null, created_at: string | null, updated_at: string | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null };

export type FairuDiskQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FairuDiskQuery = { __typename: 'Query', fairuDisk: { __typename: 'FairuDisk', id: string, name: string | null, type: FairuDiskType | null, path: string | null, pattern: string | null, delete_at_origin: boolean | null, healthy: boolean | null, syncing: boolean | null, active: boolean | null, created_at: string | null, updated_at: string | null, folder: { __typename: 'FairuFolder', id: string, name: string | null } | null, credentials: { __typename: 'FairuDiskFTPCredentials', ftp_host: string | null, ftp_port: number | null, ftp_username: string | null } | { __typename: 'FairuDiskS3Credentials', key: string | null, region: string | null, bucket: string | null, endpoint: string | null, url: string | null } | null } | null };

export type FairuDiskStatusQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FairuDiskStatusQuery = { __typename: 'Query', fairuDiskStatus: { __typename: 'FairuDiskStatus', id: string, syncing: boolean | null, open: number | null, pending: number | null, synced: number | null, failed: number | null } | null };

export type DmcaCoreFragment = { __typename: 'FairuDmca', id: string, name: string | null, email: string | null, reply: string | null, reply_send: boolean | null, status: FairuDmcaStatus | null };

export type DmcaWithFileFragment = { __typename: 'FairuDmca', id: string, name: string | null, email: string | null, reply: string | null, reply_send: boolean | null, status: FairuDmcaStatus | null, file: { __typename: 'FairuAsset', id: string, name: string | null, url: string | null } | null };

export type FairuDmcasQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
}>;


export type FairuDmcasQuery = { __typename: 'Query', fairuDmcas: { __typename: 'FairuDmcaList', data: Array<{ __typename: 'FairuDmca', id: string, name: string | null, email: string | null, reply: string | null, reply_send: boolean | null, status: FairuDmcaStatus | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null };

export type FairuDmcaQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FairuDmcaQuery = { __typename: 'Query', fairuDmca: { __typename: 'FairuDmca', id: string, name: string | null, email: string | null, reply: string | null, reply_send: boolean | null, status: FairuDmcaStatus | null, file: { __typename: 'FairuAsset', id: string, name: string | null, url: string | null } | null } | null };

export type FolderCoreFragment = { __typename: 'FairuFolder', id: string, name: string | null, auto_assign_copyright: boolean | null, createdAt: string | null, updatedAt: string | null };

export type FolderWithCopyrightsFragment = { __typename: 'FairuFolder', id: string, name: string | null, auto_assign_copyright: boolean | null, createdAt: string | null, updatedAt: string | null, copyrights: Array<{ __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, active: boolean | null } | null> | null };

export type FairuFolderQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
  folder: InputMaybe<Scalars['ID']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  globalSearch: InputMaybe<Scalars['Boolean']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  orderDirection: InputMaybe<FairuSortingDirection>;
  onlyFolder: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type FairuFolderQuery = { __typename: 'Query', fairuFolder: { __typename: 'FairuFolderList', data: Array<{ __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, alt: string | null, url: string | null, width: number | null, height: number | null, blurhash: string | null, focal_point: string | null, blocked: boolean | null, has_error: boolean | null, assetCreatedAt: string | null, assetUpdatedAt: string | null } | { __typename: 'FairuFolder', id: string, name: string | null, auto_assign_copyright: boolean | null, folderCreatedAt: string | null, folderUpdatedAt: string | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null };

export type FairuFolderByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type FairuFolderByPathQuery = { __typename: 'Query', fairuFolderByPath: { __typename: 'FairuFolder', id: string, name: string | null, auto_assign_copyright: boolean | null, createdAt: string | null, updatedAt: string | null, content: { __typename: 'FairuFolderList', data: Array<{ __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, url: string | null, width: number | null, height: number | null, blurhash: string | null } | { __typename: 'FairuFolder', id: string, name: string | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, hasMorePages: boolean | null } | null } | null, copyrights: Array<{ __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, active: boolean | null } | null> | null } | null };

export type FairuFolderAllAssetsQueryVariables = Exact<{
  path: Scalars['String']['input'];
  limit: InputMaybe<Scalars['Int']['input']>;
}>;


export type FairuFolderAllAssetsQuery = { __typename: 'Query', fairuFolderByPath: { __typename: 'FairuFolder', allAssets: Array<{ __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, url: string | null }> | null } | null };

export type GalleryCoreFragment = { __typename: 'FairuGallery', id: string, name: string | null, description: string | null, date: string | null, location: string | null, sorting_direction: string | null, sorting_field: string | null, copyright_text: string | null, active: boolean | null, exclude_from_list: boolean | null };

export type GalleryWithItemsFragment = { __typename: 'FairuGallery', id: string, name: string | null, description: string | null, date: string | null, location: string | null, sorting_direction: string | null, sorting_field: string | null, copyright_text: string | null, active: boolean | null, exclude_from_list: boolean | null, items: Array<{ __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, url: string | null, width: number | null, height: number | null, blurhash: string | null, focal_point: string | null }> | null, cover_image: { __typename: 'FairuAsset', id: string, name: string | null, url: string | null, width: number | null, height: number | null, blurhash: string | null } | null, copyrights: Array<{ __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, website: string | null }> | null };

export type FairuGalleryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FairuGalleryQuery = { __typename: 'Query', fairuGallery: { __typename: 'FairuGallery', id: string, name: string | null, description: string | null, date: string | null, location: string | null, sorting_direction: string | null, sorting_field: string | null, copyright_text: string | null, active: boolean | null, exclude_from_list: boolean | null, items: Array<{ __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, url: string | null, width: number | null, height: number | null, blurhash: string | null, focal_point: string | null }> | null, cover_image: { __typename: 'FairuAsset', id: string, name: string | null, url: string | null, width: number | null, height: number | null, blurhash: string | null } | null, copyrights: Array<{ __typename: 'FairuCopyright', id: string, name: string | null, email: string | null, website: string | null }> | null } | null };

export type FairuGalleriesQueryVariables = Exact<{
  tenants: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
  from: InputMaybe<Scalars['String']['input']>;
  until: InputMaybe<Scalars['String']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  orderDirection: InputMaybe<Scalars['String']['input']>;
}>;


export type FairuGalleriesQuery = { __typename: 'Query', fairuGalleries: { __typename: 'FairuGalleryList', data: Array<{ __typename: 'FairuGallery', id: string, name: string | null, description: string | null, date: string | null, location: string | null, sorting_direction: string | null, sorting_field: string | null, copyright_text: string | null, active: boolean | null, exclude_from_list: boolean | null, cover_image: { __typename: 'FairuAsset', id: string, url: string | null, width: number | null, height: number | null, blurhash: string | null } | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null };

export type FairuGalleryItemsPaginatedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  orderDirection: InputMaybe<Scalars['String']['input']>;
}>;


export type FairuGalleryItemsPaginatedQuery = { __typename: 'Query', fairuGallery: { __typename: 'FairuGallery', id: string, name: string | null, itemsPaginated: { __typename: 'FairuGalleryItemList', data: Array<{ __typename: 'FairuAsset', id: string, name: string | null, mime: string | null, url: string | null, width: number | null, height: number | null, blurhash: string | null, focal_point: string | null, alt: string | null, caption: string | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null } | null };

export type LicenseCoreFragment = { __typename: 'FairuLicense', id: string, name: string | null, type: FairuLicenseType | null, interval: number | null, default: boolean | null, active: boolean | null, start: string | null, end: string | null, days: number | null, replace_license: boolean | null, replace_date: string | null, created_at: string | null, updated_at: string | null };

export type LicenseWithRelationsFragment = { __typename: 'FairuLicense', id: string, name: string | null, type: FairuLicenseType | null, interval: number | null, default: boolean | null, active: boolean | null, start: string | null, end: string | null, days: number | null, replace_license: boolean | null, replace_date: string | null, created_at: string | null, updated_at: string | null, copyright: { __typename: 'FairuCopyright', id: string, name: string | null, email: string | null } | null, replace_license_entry: { __typename: 'FairuLicense', id: string, name: string | null } | null, replaced_by_license_entry: { __typename: 'FairuLicense', id: string, name: string | null } | null };

export type FairuLicensesQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
}>;


export type FairuLicensesQuery = { __typename: 'Query', fairuLicenses: { __typename: 'FairuLicenseList', data: Array<{ __typename: 'FairuLicense', id: string, name: string | null, type: FairuLicenseType | null, interval: number | null, default: boolean | null, active: boolean | null, start: string | null, end: string | null, days: number | null, replace_license: boolean | null, replace_date: string | null, created_at: string | null, updated_at: string | null, copyright: { __typename: 'FairuCopyright', id: string, name: string | null, email: string | null } | null, replace_license_entry: { __typename: 'FairuLicense', id: string, name: string | null } | null, replaced_by_license_entry: { __typename: 'FairuLicense', id: string, name: string | null } | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null };

export type FairuLicenseQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;


export type FairuLicenseQuery = { __typename: 'Query', fairuLicense: { __typename: 'FairuLicense', id: string, name: string | null, type: FairuLicenseType | null, interval: number | null, default: boolean | null, active: boolean | null, start: string | null, end: string | null, days: number | null, replace_license: boolean | null, replace_date: string | null, created_at: string | null, updated_at: string | null, copyright: { __typename: 'FairuCopyright', id: string, name: string | null, email: string | null } | null, replace_license_entry: { __typename: 'FairuLicense', id: string, name: string | null } | null, replaced_by_license_entry: { __typename: 'FairuLicense', id: string, name: string | null } | null } | null };

export type RakuCredentialCoreFragment = { __typename: 'FairuRakuCredential', id: string, name: string | null, access_key_id: string, bucket: string | null, permissions: Array<string>, active: boolean, last_used_at: string | null, expires_at: string | null, created_at: string };

export type FairuRakuCredentialsQueryVariables = Exact<{ [key: string]: never; }>;


export type FairuRakuCredentialsQuery = { __typename: 'Query', fairuRakuCredentials: Array<{ __typename: 'FairuRakuCredential', id: string, name: string | null, access_key_id: string, bucket: string | null, permissions: Array<string>, active: boolean, last_used_at: string | null, expires_at: string | null, created_at: string }> };

export type RoleCoreFragment = { __typename: 'FairuRole', id: string, name: string | null, permissions: Array<string> | null, created_at: string | null, updated_at: string | null };

export type FairuRolesQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
}>;


export type FairuRolesQuery = { __typename: 'Query', fairuRoles: { __typename: 'FairuRoleList', data: Array<{ __typename: 'FairuRole', id: string, name: string | null, permissions: Array<string> | null, created_at: string | null, updated_at: string | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null };

export type FairuRoleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FairuRoleQuery = { __typename: 'Query', fairuRole: { __typename: 'FairuRole', id: string, name: string | null, permissions: Array<string> | null, created_at: string | null, updated_at: string | null } | null };

export type TenantCoreFragment = { __typename: 'FairuTenant', id: string, name: string | null, use_ai: boolean | null, use_ai_onupload: boolean | null, ai_language: string | null, force_file_alt: boolean | null, force_file_description: boolean | null, force_file_caption: boolean | null, force_filce_copyright: boolean | null, force_file_policy: boolean | null, block_files_with_error: boolean | null, force_license: boolean | null, custom_domain: string | null, custom_domain_verified: boolean | null, custom_domain_status: FairuCustomDomainStatus | null, webhook_url: string | null, webhook_type: FairuWebhookType | null, created_at: string | null, updated_at: string | null, trial_ends_at: string | null };

export type TenantWithAvatarFragment = { __typename: 'FairuTenant', id: string, name: string | null, use_ai: boolean | null, use_ai_onupload: boolean | null, ai_language: string | null, force_file_alt: boolean | null, force_file_description: boolean | null, force_file_caption: boolean | null, force_filce_copyright: boolean | null, force_file_policy: boolean | null, block_files_with_error: boolean | null, force_license: boolean | null, custom_domain: string | null, custom_domain_verified: boolean | null, custom_domain_status: FairuCustomDomainStatus | null, webhook_url: string | null, webhook_type: FairuWebhookType | null, created_at: string | null, updated_at: string | null, trial_ends_at: string | null, avatar: { __typename: 'FairuAsset', id: string, url: string | null, width: number | null, height: number | null } | null };

export type FairuTenantQueryVariables = Exact<{ [key: string]: never; }>;


export type FairuTenantQuery = { __typename: 'Query', fairuTenant: { __typename: 'FairuTenant', id: string, name: string | null, use_ai: boolean | null, use_ai_onupload: boolean | null, ai_language: string | null, force_file_alt: boolean | null, force_file_description: boolean | null, force_file_caption: boolean | null, force_filce_copyright: boolean | null, force_file_policy: boolean | null, block_files_with_error: boolean | null, force_license: boolean | null, custom_domain: string | null, custom_domain_verified: boolean | null, custom_domain_status: FairuCustomDomainStatus | null, webhook_url: string | null, webhook_type: FairuWebhookType | null, created_at: string | null, updated_at: string | null, trial_ends_at: string | null, avatar: { __typename: 'FairuAsset', id: string, url: string | null, width: number | null, height: number | null } | null } | null };

export type FairuHealthCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type FairuHealthCheckQuery = { __typename: 'Query', fairuHealthCheck: { __typename: 'FairuHealthStatus', version: string | null, healthy: boolean | null } | null };

export type FairuSupportedDomainsQueryVariables = Exact<{ [key: string]: never; }>;


export type FairuSupportedDomainsQuery = { __typename: 'Query', fairuSupportedDomains: Array<string> };

export type UserCoreFragment = { __typename: 'FairuUser', id: string, name: string | null, email: string | null, status: FairuUserStatus | null, owner: boolean | null };

export type FairuUsersQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
}>;


export type FairuUsersQuery = { __typename: 'Query', fairuUsers: { __typename: 'FairuUserList', data: Array<{ __typename: 'FairuUser', id: string, name: string | null, email: string | null, status: FairuUserStatus | null, owner: boolean | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null };

export type FairuUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FairuUserQuery = { __typename: 'Query', fairuUser: { __typename: 'FairuUser', id: string, name: string | null, email: string | null, status: FairuUserStatus | null, owner: boolean | null } | null };

export type WorkflowCoreFragment = { __typename: 'FairuWorkflow', id: string, name: string | null, type: FairuWorkflowType, active: boolean | null, status: FairuWorkflowStatus, has_error: boolean | null, last_at: string | null, created_at: string | null, updated_at: string | null };

export type FairuWorkflowsQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  perPage: InputMaybe<Scalars['Int']['input']>;
}>;


export type FairuWorkflowsQuery = { __typename: 'Query', fairuWorkflows: { __typename: 'FairuWorkflowList', data: Array<{ __typename: 'FairuWorkflow', id: string, name: string | null, type: FairuWorkflowType, active: boolean | null, status: FairuWorkflowStatus, has_error: boolean | null, last_at: string | null, created_at: string | null, updated_at: string | null }> | null, paginatorInfo: { __typename: 'DefaultPaginator', total: number | null, count: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasMorePages: boolean | null, firstItem: number | null, lastItem: number | null } | null } | null };

export type FairuWorkflowQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FairuWorkflowQuery = { __typename: 'Query', fairuWorkflow: { __typename: 'FairuWorkflow', id: string, name: string | null, type: FairuWorkflowType, active: boolean | null, status: FairuWorkflowStatus, has_error: boolean | null, last_at: string | null, created_at: string | null, updated_at: string | null } | null };

export const AssetCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"original_width"}},{"kind":"Field","name":{"kind":"Name","value":"original_height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"has_error"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"versions"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<AssetCoreFragment, unknown>;
export const AssetWithRelationsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetWithRelations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetCore"}},{"kind":"Field","name":{"kind":"Name","value":"copyrights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"licenses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"original_width"}},{"kind":"Field","name":{"kind":"Name","value":"original_height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"has_error"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"versions"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<AssetWithRelationsFragment, unknown>;
export const CopyrightCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CopyrightCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuCopyright"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<CopyrightCoreFragment, unknown>;
export const DiskCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiskCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDisk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"pattern"}},{"kind":"Field","name":{"kind":"Name","value":"delete_at_origin"}},{"kind":"Field","name":{"kind":"Name","value":"healthy"}},{"kind":"Field","name":{"kind":"Name","value":"syncing"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<DiskCoreFragment, unknown>;
export const DiskWithCredentialsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiskWithCredentials"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDisk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiskCore"}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"credentials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDiskFTPCredentials"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ftp_host"}},{"kind":"Field","name":{"kind":"Name","value":"ftp_port"}},{"kind":"Field","name":{"kind":"Name","value":"ftp_username"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDiskS3Credentials"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiskCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDisk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"pattern"}},{"kind":"Field","name":{"kind":"Name","value":"delete_at_origin"}},{"kind":"Field","name":{"kind":"Name","value":"healthy"}},{"kind":"Field","name":{"kind":"Name","value":"syncing"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<DiskWithCredentialsFragment, unknown>;
export const DmcaCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DmcaCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDmca"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}},{"kind":"Field","name":{"kind":"Name","value":"reply_send"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<DmcaCoreFragment, unknown>;
export const DmcaWithFileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DmcaWithFile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDmca"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DmcaCore"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DmcaCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDmca"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}},{"kind":"Field","name":{"kind":"Name","value":"reply_send"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<DmcaWithFileFragment, unknown>;
export const FolderCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuFolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"auto_assign_copyright"}},{"kind":"Field","alias":{"kind":"Name","value":"createdAt"},"name":{"kind":"Name","value":"created_at"}},{"kind":"Field","alias":{"kind":"Name","value":"updatedAt"},"name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FolderCoreFragment, unknown>;
export const FolderWithCopyrightsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderWithCopyrights"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuFolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderCore"}},{"kind":"Field","name":{"kind":"Name","value":"copyrights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuFolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"auto_assign_copyright"}},{"kind":"Field","alias":{"kind":"Name","value":"createdAt"},"name":{"kind":"Name","value":"created_at"}},{"kind":"Field","alias":{"kind":"Name","value":"updatedAt"},"name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FolderWithCopyrightsFragment, unknown>;
export const GalleryCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GalleryCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuGallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_direction"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_field"}},{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"exclude_from_list"}}]}}]} as unknown as DocumentNode<GalleryCoreFragment, unknown>;
export const GalleryWithItemsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GalleryWithItems"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuGallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GalleryCore"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"copyrights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GalleryCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuGallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_direction"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_field"}},{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"exclude_from_list"}}]}}]} as unknown as DocumentNode<GalleryWithItemsFragment, unknown>;
export const LicenseCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LicenseCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuLicense"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"replace_license"}},{"kind":"Field","name":{"kind":"Name","value":"replace_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<LicenseCoreFragment, unknown>;
export const LicenseWithRelationsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LicenseWithRelations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuLicense"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LicenseCore"}},{"kind":"Field","name":{"kind":"Name","value":"copyright"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replace_license_entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replaced_by_license_entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LicenseCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuLicense"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"replace_license"}},{"kind":"Field","name":{"kind":"Name","value":"replace_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<LicenseWithRelationsFragment, unknown>;
export const RakuCredentialCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RakuCredentialCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuRakuCredential"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"access_key_id"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"last_used_at"}},{"kind":"Field","name":{"kind":"Name","value":"expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]} as unknown as DocumentNode<RakuCredentialCoreFragment, unknown>;
export const RoleCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RoleCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<RoleCoreFragment, unknown>;
export const TenantCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuTenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"use_ai"}},{"kind":"Field","name":{"kind":"Name","value":"use_ai_onupload"}},{"kind":"Field","name":{"kind":"Name","value":"ai_language"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_alt"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_description"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_caption"}},{"kind":"Field","name":{"kind":"Name","value":"force_filce_copyright"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_policy"}},{"kind":"Field","name":{"kind":"Name","value":"block_files_with_error"}},{"kind":"Field","name":{"kind":"Name","value":"force_license"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain_verified"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain_status"}},{"kind":"Field","name":{"kind":"Name","value":"webhook_url"}},{"kind":"Field","name":{"kind":"Name","value":"webhook_type"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"trial_ends_at"}}]}}]} as unknown as DocumentNode<TenantCoreFragment, unknown>;
export const TenantWithAvatarFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantWithAvatar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuTenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantCore"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuTenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"use_ai"}},{"kind":"Field","name":{"kind":"Name","value":"use_ai_onupload"}},{"kind":"Field","name":{"kind":"Name","value":"ai_language"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_alt"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_description"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_caption"}},{"kind":"Field","name":{"kind":"Name","value":"force_filce_copyright"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_policy"}},{"kind":"Field","name":{"kind":"Name","value":"block_files_with_error"}},{"kind":"Field","name":{"kind":"Name","value":"force_license"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain_verified"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain_status"}},{"kind":"Field","name":{"kind":"Name","value":"webhook_url"}},{"kind":"Field","name":{"kind":"Name","value":"webhook_type"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"trial_ends_at"}}]}}]} as unknown as DocumentNode<TenantWithAvatarFragment, unknown>;
export const UserCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]} as unknown as DocumentNode<UserCoreFragment, unknown>;
export const WorkflowCoreFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkflowCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuWorkflow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"has_error"}},{"kind":"Field","name":{"kind":"Name","value":"last_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<WorkflowCoreFragment, unknown>;
export const UpdateFairuFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFairuFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuFileDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFairuFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"copyrights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"licenses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<UpdateFairuFileMutation, UpdateFairuFileMutationVariables>;
export const DeleteFairuFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFairuFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFairuFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteFairuFileMutation, DeleteFairuFileMutationVariables>;
export const BlockFairuFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BlockFairuFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockFairuFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<BlockFairuFileMutation, BlockFairuFileMutationVariables>;
export const UnblockFairuFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnblockFairuFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unblockFairuFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<UnblockFairuFileMutation, UnblockFairuFileMutationVariables>;
export const RenameFairuFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RenameFairuFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renameFairuFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<RenameFairuFileMutation, RenameFairuFileMutationVariables>;
export const MoveFairuFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MoveFairuFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moveFairuFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"parent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parent"}}}]}]}}]} as unknown as DocumentNode<MoveFairuFileMutation, MoveFairuFileMutationVariables>;
export const DuplicateFairuFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DuplicateFairuFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"duplicateFairuFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"parent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parent"}}}]}]}}]} as unknown as DocumentNode<DuplicateFairuFileMutation, DuplicateFairuFileMutationVariables>;
export const RedownloadFairuFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RedownloadFairuFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"redownloadFairuFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RedownloadFairuFileMutation, RedownloadFairuFileMutationVariables>;
export const ReplaceFairuFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ReplaceFairuFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replaceFairuFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"upload_url"}},{"kind":"Field","name":{"kind":"Name","value":"sync_url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}}]}}]}}]} as unknown as DocumentNode<ReplaceFairuFileMutation, ReplaceFairuFileMutationVariables>;
export const FairuFileUrlByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FairuFileUrlByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenant"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"width"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"focal_point"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"withStoredFocalPoint"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quality"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAssetVideoVersions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuFileUrlByPath"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tenant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenant"}}},{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"Variable","name":{"kind":"Name","value":"width"}}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}},{"kind":"Argument","name":{"kind":"Name","value":"focal_point"},"value":{"kind":"Variable","name":{"kind":"Name","value":"focal_point"}}},{"kind":"Argument","name":{"kind":"Name","value":"withStoredFocalPoint"},"value":{"kind":"Variable","name":{"kind":"Name","value":"withStoredFocalPoint"}}},{"kind":"Argument","name":{"kind":"Name","value":"quality"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quality"}}},{"kind":"Argument","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}]}}]} as unknown as DocumentNode<FairuFileUrlByPathMutation, FairuFileUrlByPathMutationVariables>;
export const CreateFairuCopyrightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuCopyright"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuCopyrightDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuCopyright"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<CreateFairuCopyrightMutation, CreateFairuCopyrightMutationVariables>;
export const UpdateFairuCopyrightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFairuCopyright"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuCopyrightDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFairuCopyright"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<UpdateFairuCopyrightMutation, UpdateFairuCopyrightMutationVariables>;
export const DeleteFairuCopyrightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFairuCopyright"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteAssets"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteLicenses"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFairuCopyright"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"deleteAssets"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteAssets"}}},{"kind":"Argument","name":{"kind":"Name","value":"deleteLicenses"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteLicenses"}}}]}]}}]} as unknown as DocumentNode<DeleteFairuCopyrightMutation, DeleteFairuCopyrightMutationVariables>;
export const CreateFairuDiskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuDisk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDiskDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuDisk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"pattern"}},{"kind":"Field","name":{"kind":"Name","value":"delete_at_origin"}},{"kind":"Field","name":{"kind":"Name","value":"healthy"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<CreateFairuDiskMutation, CreateFairuDiskMutationVariables>;
export const UpdateFairuDiskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFairuDisk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDiskDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFairuDisk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"pattern"}},{"kind":"Field","name":{"kind":"Name","value":"delete_at_origin"}},{"kind":"Field","name":{"kind":"Name","value":"healthy"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<UpdateFairuDiskMutation, UpdateFairuDiskMutationVariables>;
export const DeleteFairuDiskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFairuDisk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFairuDisk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteFairuDiskMutation, DeleteFairuDiskMutationVariables>;
export const CreateFairuDmcaComplainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuDmcaComplain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDmcaComplainDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuDmcaComplain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateFairuDmcaComplainMutation, CreateFairuDmcaComplainMutationVariables>;
export const UpdateFairuDmcaComplainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFairuDmcaComplain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDmcaDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFairuDmcaComplain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}},{"kind":"Field","name":{"kind":"Name","value":"reply_send"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateFairuDmcaComplainMutation, UpdateFairuDmcaComplainMutationVariables>;
export const CreateFairuFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuFolderDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"auto_assign_copyright"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<CreateFairuFolderMutation, CreateFairuFolderMutationVariables>;
export const UpdateFairuFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFairuFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuFolderDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFairuFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"auto_assign_copyright"}},{"kind":"Field","name":{"kind":"Name","value":"copyrights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<UpdateFairuFolderMutation, UpdateFairuFolderMutationVariables>;
export const DeleteFairuFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFairuFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFairuFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteFairuFolderMutation, DeleteFairuFolderMutationVariables>;
export const RenameFairuFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RenameFairuFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renameFairuFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<RenameFairuFolderMutation, RenameFairuFolderMutationVariables>;
export const MoveFairuFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MoveFairuFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moveFairuFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"parent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parent"}}}]}]}}]} as unknown as DocumentNode<MoveFairuFolderMutation, MoveFairuFolderMutationVariables>;
export const CreateFairuFolderFtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuFolderFTP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuFolderFTP"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"healthy"}}]}}]}}]} as unknown as DocumentNode<CreateFairuFolderFtpMutation, CreateFairuFolderFtpMutationVariables>;
export const CreateFairuGalleryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuGallery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuGalleryDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuGallery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_direction"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_field"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"exclude_from_list"}}]}}]}}]} as unknown as DocumentNode<CreateFairuGalleryMutation, CreateFairuGalleryMutationVariables>;
export const UpdateFairuGalleryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFairuGallery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuGalleryDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFairuGallery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_direction"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_field"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"exclude_from_list"}}]}}]}}]} as unknown as DocumentNode<UpdateFairuGalleryMutation, UpdateFairuGalleryMutationVariables>;
export const DeleteFairuGalleryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFairuGallery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFairuGallery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteFairuGalleryMutation, DeleteFairuGalleryMutationVariables>;
export const CreateFairuGalleryShareLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuGalleryShareLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuGalleryShareLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<CreateFairuGalleryShareLinkMutation, CreateFairuGalleryShareLinkMutationVariables>;
export const CreateFairuLicenseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuLicense"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuLicenseDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuLicense"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"replace_license"}},{"kind":"Field","name":{"kind":"Name","value":"replace_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"copyright"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateFairuLicenseMutation, CreateFairuLicenseMutationVariables>;
export const UpdateFairuLicenseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFairuLicense"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuLicenseDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFairuLicense"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"replace_license"}},{"kind":"Field","name":{"kind":"Name","value":"replace_date"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"copyright"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateFairuLicenseMutation, UpdateFairuLicenseMutationVariables>;
export const DeleteFairuLicenseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFairuLicense"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteAssets"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFairuLicense"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"deleteAssets"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteAssets"}}}]}]}}]} as unknown as DocumentNode<DeleteFairuLicenseMutation, DeleteFairuLicenseMutationVariables>;
export const CreateFairuPdfSignatureRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuPdfSignatureRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuFilePdfSignatureRequestDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuPdfSignatureRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"emails"}},{"kind":"Field","name":{"kind":"Name","value":"config_url"}},{"kind":"Field","name":{"kind":"Name","value":"signature_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<CreateFairuPdfSignatureRequestMutation, CreateFairuPdfSignatureRequestMutationVariables>;
export const StartFairuPdfSignatureRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartFairuPdfSignatureRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startFairuPdfSignatureRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"config_url"}},{"kind":"Field","name":{"kind":"Name","value":"signature_id"}}]}}]}}]} as unknown as DocumentNode<StartFairuPdfSignatureRequestMutation, StartFairuPdfSignatureRequestMutationVariables>;
export const CancelFairuPdfSignatureRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelFairuPdfSignatureRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelFairuPdfSignatureRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<CancelFairuPdfSignatureRequestMutation, CancelFairuPdfSignatureRequestMutationVariables>;
export const CreateFairuRakuCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuRakuCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bucket"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permissions"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuRakuCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"bucket"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bucket"}}},{"kind":"Argument","name":{"kind":"Name","value":"permissions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permissions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"access_key_id"}},{"kind":"Field","name":{"kind":"Name","value":"secret_access_key"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]} as unknown as DocumentNode<CreateFairuRakuCredentialMutation, CreateFairuRakuCredentialMutationVariables>;
export const RevokeFairuRakuCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeFairuRakuCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeFairuRakuCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RevokeFairuRakuCredentialMutation, RevokeFairuRakuCredentialMutationVariables>;
export const DeleteFairuRakuCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFairuRakuCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFairuRakuCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteFairuRakuCredentialMutation, DeleteFairuRakuCredentialMutationVariables>;
export const CreateFairuRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuRoleDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<CreateFairuRoleMutation, CreateFairuRoleMutationVariables>;
export const UpdateFairuRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFairuRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuRoleDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFairuRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<UpdateFairuRoleMutation, UpdateFairuRoleMutationVariables>;
export const DeleteFairuRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFairuRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFairuRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteFairuRoleMutation, DeleteFairuRoleMutationVariables>;
export const CreateFairuTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuTenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"api_key"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<CreateFairuTenantMutation, CreateFairuTenantMutationVariables>;
export const UpdateFairuTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFairuTenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"force_license"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"use_ai"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"use_ai_onupload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ai_language"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ai_nsfw"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ai_blur_faces"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"force_file_alt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"force_file_description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"force_file_caption"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"force_file_copyright"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"force_file_policy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"block_files_with_error"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"custom_domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hide_dotfiles"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFairuTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"force_license"},"value":{"kind":"Variable","name":{"kind":"Name","value":"force_license"}}},{"kind":"Argument","name":{"kind":"Name","value":"use_ai"},"value":{"kind":"Variable","name":{"kind":"Name","value":"use_ai"}}},{"kind":"Argument","name":{"kind":"Name","value":"use_ai_onupload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"use_ai_onupload"}}},{"kind":"Argument","name":{"kind":"Name","value":"avatar_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ai_language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ai_language"}}},{"kind":"Argument","name":{"kind":"Name","value":"ai_nsfw"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ai_nsfw"}}},{"kind":"Argument","name":{"kind":"Name","value":"ai_blur_faces"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ai_blur_faces"}}},{"kind":"Argument","name":{"kind":"Name","value":"force_file_alt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"force_file_alt"}}},{"kind":"Argument","name":{"kind":"Name","value":"force_file_description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"force_file_description"}}},{"kind":"Argument","name":{"kind":"Name","value":"force_file_caption"},"value":{"kind":"Variable","name":{"kind":"Name","value":"force_file_caption"}}},{"kind":"Argument","name":{"kind":"Name","value":"force_file_copyright"},"value":{"kind":"Variable","name":{"kind":"Name","value":"force_file_copyright"}}},{"kind":"Argument","name":{"kind":"Name","value":"force_file_policy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"force_file_policy"}}},{"kind":"Argument","name":{"kind":"Name","value":"block_files_with_error"},"value":{"kind":"Variable","name":{"kind":"Name","value":"block_files_with_error"}}},{"kind":"Argument","name":{"kind":"Name","value":"custom_domain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"custom_domain"}}},{"kind":"Argument","name":{"kind":"Name","value":"hide_dotfiles"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hide_dotfiles"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"use_ai"}},{"kind":"Field","name":{"kind":"Name","value":"use_ai_onupload"}},{"kind":"Field","name":{"kind":"Name","value":"ai_language"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_alt"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_description"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_caption"}},{"kind":"Field","name":{"kind":"Name","value":"force_filce_copyright"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_policy"}},{"kind":"Field","name":{"kind":"Name","value":"block_files_with_error"}},{"kind":"Field","name":{"kind":"Name","value":"force_license"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain_verified"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain_status"}},{"kind":"Field","name":{"kind":"Name","value":"webhook_url"}},{"kind":"Field","name":{"kind":"Name","value":"webhook_type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<UpdateFairuTenantMutation, UpdateFairuTenantMutationVariables>;
export const CreateFairuUploadLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuUploadLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filename"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuUploadType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"download_url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"caption"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"focal_point"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"copyright"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuUploadLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filename"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filename"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"download_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"download_url"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"fileSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"alt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alt"}}},{"kind":"Argument","name":{"kind":"Name","value":"caption"},"value":{"kind":"Variable","name":{"kind":"Name","value":"caption"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"focal_point"},"value":{"kind":"Variable","name":{"kind":"Name","value":"focal_point"}}},{"kind":"Argument","name":{"kind":"Name","value":"copyright"},"value":{"kind":"Variable","name":{"kind":"Name","value":"copyright"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"upload_url"}},{"kind":"Field","name":{"kind":"Name","value":"sync_url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}}]}}]}}]} as unknown as DocumentNode<CreateFairuUploadLinkMutation, CreateFairuUploadLinkMutationVariables>;
export const InitFairuMultipartUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InitFairuMultipartUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filename"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"caption"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"copyright"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"initFairuMultipartUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filename"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filename"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder"}}},{"kind":"Argument","name":{"kind":"Name","value":"fileSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"contentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}}},{"kind":"Argument","name":{"kind":"Name","value":"alt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alt"}}},{"kind":"Argument","name":{"kind":"Name","value":"caption"},"value":{"kind":"Variable","name":{"kind":"Name","value":"caption"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"copyright"},"value":{"kind":"Variable","name":{"kind":"Name","value":"copyright"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uploadId"}},{"kind":"Field","name":{"kind":"Name","value":"partSize"}},{"kind":"Field","name":{"kind":"Name","value":"totalParts"}},{"kind":"Field","name":{"kind":"Name","value":"parts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"uploadUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sync_url"}}]}}]}}]} as unknown as DocumentNode<InitFairuMultipartUploadMutation, InitFairuMultipartUploadMutationVariables>;
export const GetFairuMultipartPartUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GetFairuMultipartPartUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFairuMultipartPartUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"uploadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}}},{"kind":"Argument","name":{"kind":"Name","value":"partNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"uploadUrl"}}]}}]}}]} as unknown as DocumentNode<GetFairuMultipartPartUrlMutation, GetFairuMultipartPartUrlMutationVariables>;
export const CompleteFairuMultipartUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteFairuMultipartUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parts"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuMultipartPartInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completeFairuMultipartUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"uploadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}}},{"kind":"Argument","name":{"kind":"Name","value":"parts"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parts"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"upload_url"}},{"kind":"Field","name":{"kind":"Name","value":"sync_url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}}]}}]}}]} as unknown as DocumentNode<CompleteFairuMultipartUploadMutation, CompleteFairuMultipartUploadMutationVariables>;
export const AbortFairuMultipartUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AbortFairuMultipartUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abortFairuMultipartUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"uploadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}}}]}]}}]} as unknown as DocumentNode<AbortFairuMultipartUploadMutation, AbortFairuMultipartUploadMutationVariables>;
export const CreateFairuFolderUploadShareLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuFolderUploadShareLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expires_in"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuUploadShareLinkExpiration"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuFolderUploadShareLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"expires_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expires_in"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"folder_id"}}]}}]}}]} as unknown as DocumentNode<CreateFairuFolderUploadShareLinkMutation, CreateFairuFolderUploadShareLinkMutationVariables>;
export const CreateFairuFileAccessSignatureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuFileAccessSignature"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"valid_for_minutes"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuFileAccessSignature"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"valid_for_minutes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"valid_for_minutes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"expires_at"}}]}}]}}]} as unknown as DocumentNode<CreateFairuFileAccessSignatureMutation, CreateFairuFileAccessSignatureMutationVariables>;
export const InviteFairuUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InviteFairuUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteFairuUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}}]}]}}]} as unknown as DocumentNode<InviteFairuUserMutation, InviteFairuUserMutationVariables>;
export const DeleteFairuUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFairuUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFairuUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteFairuUserMutation, DeleteFairuUserMutationVariables>;
export const CreateFairuWorkflowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFairuWorkflow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuWorkflowDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFairuWorkflow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<CreateFairuWorkflowMutation, CreateFairuWorkflowMutationVariables>;
export const UpdateFairuWorkflowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFairuWorkflow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuWorkflowDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFairuWorkflow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<UpdateFairuWorkflowMutation, UpdateFairuWorkflowMutationVariables>;
export const DeleteFairuWorkflowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFairuWorkflow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFairuWorkflow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteFairuWorkflowMutation, DeleteFairuWorkflowMutationVariables>;
export const FairuFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetWithRelations"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"original_width"}},{"kind":"Field","name":{"kind":"Name","value":"original_height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"has_error"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"versions"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetWithRelations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetCore"}},{"kind":"Field","name":{"kind":"Name","value":"copyrights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"licenses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<FairuFileQuery, FairuFileQueryVariables>;
export const FairuFileByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuFileByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuFileByPath"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetWithRelations"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"original_width"}},{"kind":"Field","name":{"kind":"Name","value":"original_height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"has_error"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"versions"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetWithRelations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetCore"}},{"kind":"Field","name":{"kind":"Name","value":"copyrights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"licenses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<FairuFileByPathQuery, FairuFileByPathQueryVariables>;
export const FairuFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetCore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"original_width"}},{"kind":"Field","name":{"kind":"Name","value":"original_height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"has_error"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"versions"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FairuFilesQuery, FairuFilesQueryVariables>;
export const FairuMultipleFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuMultipleFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuMultipleFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetCore"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"original_width"}},{"kind":"Field","name":{"kind":"Name","value":"original_height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"has_error"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"versions"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FairuMultipleFilesQuery, FairuMultipleFilesQueryVariables>;
export const FairuFilesTotalSizeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuFilesTotalSize"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuFilesTotalSize"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<FairuFilesTotalSizeQuery, FairuFilesTotalSizeQueryVariables>;
export const FairuSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuSortingDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssetCore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssetCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"original_width"}},{"kind":"Field","name":{"kind":"Name","value":"original_height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"has_error"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"versions"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FairuSearchQuery, FairuSearchQueryVariables>;
export const FairuAllFilesFlatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuAllFilesFlat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"afterCursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuAllFilesFlat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"afterCursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"afterCursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"isFolder"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasMore"}}]}}]}}]} as unknown as DocumentNode<FairuAllFilesFlatQuery, FairuAllFilesFlatQueryVariables>;
export const FairuCopyrightsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuCopyrights"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuCopyrights"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CopyrightCore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CopyrightCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuCopyright"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FairuCopyrightsQuery, FairuCopyrightsQueryVariables>;
export const FairuCopyrightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuCopyright"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuCopyright"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CopyrightCore"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CopyrightCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuCopyright"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FairuCopyrightQuery, FairuCopyrightQueryVariables>;
export const FairuDisksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuDisks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuDisks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiskCore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiskCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDisk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"pattern"}},{"kind":"Field","name":{"kind":"Name","value":"delete_at_origin"}},{"kind":"Field","name":{"kind":"Name","value":"healthy"}},{"kind":"Field","name":{"kind":"Name","value":"syncing"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FairuDisksQuery, FairuDisksQueryVariables>;
export const FairuDiskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuDisk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuDisk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiskWithCredentials"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiskCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDisk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"pattern"}},{"kind":"Field","name":{"kind":"Name","value":"delete_at_origin"}},{"kind":"Field","name":{"kind":"Name","value":"healthy"}},{"kind":"Field","name":{"kind":"Name","value":"syncing"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiskWithCredentials"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDisk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiskCore"}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"credentials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDiskFTPCredentials"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ftp_host"}},{"kind":"Field","name":{"kind":"Name","value":"ftp_port"}},{"kind":"Field","name":{"kind":"Name","value":"ftp_username"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDiskS3Credentials"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<FairuDiskQuery, FairuDiskQueryVariables>;
export const FairuDiskStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuDiskStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuDiskStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"syncing"}},{"kind":"Field","name":{"kind":"Name","value":"open"}},{"kind":"Field","name":{"kind":"Name","value":"pending"}},{"kind":"Field","name":{"kind":"Name","value":"synced"}},{"kind":"Field","name":{"kind":"Name","value":"failed"}}]}}]}}]} as unknown as DocumentNode<FairuDiskStatusQuery, FairuDiskStatusQueryVariables>;
export const FairuDmcasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuDmcas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuDmcas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DmcaCore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DmcaCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDmca"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}},{"kind":"Field","name":{"kind":"Name","value":"reply_send"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<FairuDmcasQuery, FairuDmcasQueryVariables>;
export const FairuDmcaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuDmca"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuDmca"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DmcaWithFile"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DmcaCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDmca"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}},{"kind":"Field","name":{"kind":"Name","value":"reply_send"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DmcaWithFile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuDmca"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DmcaCore"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<FairuDmcaQuery, FairuDmcaQueryVariables>;
export const FairuFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"globalSearch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FairuSortingDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"onlyFolder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"globalSearch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"globalSearch"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"onlyFolder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"onlyFolder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"has_error"}},{"kind":"Field","alias":{"kind":"Name","value":"assetCreatedAt"},"name":{"kind":"Name","value":"created_at"}},{"kind":"Field","alias":{"kind":"Name","value":"assetUpdatedAt"},"name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuFolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"auto_assign_copyright"}},{"kind":"Field","alias":{"kind":"Name","value":"folderCreatedAt"},"name":{"kind":"Name","value":"created_at"}},{"kind":"Field","alias":{"kind":"Name","value":"folderUpdatedAt"},"name":{"kind":"Name","value":"updated_at"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}}]} as unknown as DocumentNode<FairuFolderQuery, FairuFolderQueryVariables>;
export const FairuFolderByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuFolderByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuFolderByPath"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderWithCopyrights"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuFolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuFolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"auto_assign_copyright"}},{"kind":"Field","alias":{"kind":"Name","value":"createdAt"},"name":{"kind":"Name","value":"created_at"}},{"kind":"Field","alias":{"kind":"Name","value":"updatedAt"},"name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderWithCopyrights"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuFolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderCore"}},{"kind":"Field","name":{"kind":"Name","value":"copyrights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<FairuFolderByPathQuery, FairuFolderByPathQueryVariables>;
export const FairuFolderAllAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuFolderAllAssets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuFolderByPath"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAssets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<FairuFolderAllAssetsQuery, FairuFolderAllAssetsQueryVariables>;
export const FairuGalleryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuGallery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuGallery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GalleryWithItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GalleryCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuGallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_direction"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_field"}},{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"exclude_from_list"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GalleryWithItems"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuGallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GalleryCore"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"copyrights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]} as unknown as DocumentNode<FairuGalleryQuery, FairuGalleryQueryVariables>;
export const FairuGalleriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuGalleries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenants"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"until"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuGalleries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tenants"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenants"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}},{"kind":"Argument","name":{"kind":"Name","value":"until"},"value":{"kind":"Variable","name":{"kind":"Name","value":"until"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GalleryCore"}},{"kind":"Field","name":{"kind":"Name","value":"cover_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GalleryCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuGallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_direction"}},{"kind":"Field","name":{"kind":"Name","value":"sorting_field"}},{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"exclude_from_list"}}]}}]} as unknown as DocumentNode<FairuGalleriesQuery, FairuGalleriesQueryVariables>;
export const FairuGalleryItemsPaginatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuGalleryItemsPaginated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuGallery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPaginated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurhash"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FairuGalleryItemsPaginatedQuery, FairuGalleryItemsPaginatedQueryVariables>;
export const FairuLicensesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuLicenses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuLicenses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LicenseWithRelations"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LicenseCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuLicense"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"replace_license"}},{"kind":"Field","name":{"kind":"Name","value":"replace_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LicenseWithRelations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuLicense"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LicenseCore"}},{"kind":"Field","name":{"kind":"Name","value":"copyright"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replace_license_entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replaced_by_license_entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FairuLicensesQuery, FairuLicensesQueryVariables>;
export const FairuLicenseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuLicense"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuLicense"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LicenseWithRelations"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LicenseCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuLicense"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"replace_license"}},{"kind":"Field","name":{"kind":"Name","value":"replace_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LicenseWithRelations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuLicense"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LicenseCore"}},{"kind":"Field","name":{"kind":"Name","value":"copyright"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replace_license_entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replaced_by_license_entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FairuLicenseQuery, FairuLicenseQueryVariables>;
export const FairuRakuCredentialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuRakuCredentials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuRakuCredentials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RakuCredentialCore"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RakuCredentialCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuRakuCredential"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"access_key_id"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"last_used_at"}},{"kind":"Field","name":{"kind":"Name","value":"expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]} as unknown as DocumentNode<FairuRakuCredentialsQuery, FairuRakuCredentialsQueryVariables>;
export const FairuRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuRoles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RoleCore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RoleCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FairuRolesQuery, FairuRolesQueryVariables>;
export const FairuRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RoleCore"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RoleCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FairuRoleQuery, FairuRoleQueryVariables>;
export const FairuTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuTenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuTenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantWithAvatar"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuTenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"use_ai"}},{"kind":"Field","name":{"kind":"Name","value":"use_ai_onupload"}},{"kind":"Field","name":{"kind":"Name","value":"ai_language"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_alt"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_description"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_caption"}},{"kind":"Field","name":{"kind":"Name","value":"force_filce_copyright"}},{"kind":"Field","name":{"kind":"Name","value":"force_file_policy"}},{"kind":"Field","name":{"kind":"Name","value":"block_files_with_error"}},{"kind":"Field","name":{"kind":"Name","value":"force_license"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain_verified"}},{"kind":"Field","name":{"kind":"Name","value":"custom_domain_status"}},{"kind":"Field","name":{"kind":"Name","value":"webhook_url"}},{"kind":"Field","name":{"kind":"Name","value":"webhook_type"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"trial_ends_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantWithAvatar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuTenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantCore"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<FairuTenantQuery, FairuTenantQueryVariables>;
export const FairuHealthCheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuHealthCheck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuHealthCheck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"healthy"}}]}}]}}]} as unknown as DocumentNode<FairuHealthCheckQuery, FairuHealthCheckQueryVariables>;
export const FairuSupportedDomainsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuSupportedDomains"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuSupportedDomains"}}]}}]} as unknown as DocumentNode<FairuSupportedDomainsQuery, FairuSupportedDomainsQueryVariables>;
export const FairuUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]} as unknown as DocumentNode<FairuUsersQuery, FairuUsersQueryVariables>;
export const FairuUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserCore"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]} as unknown as DocumentNode<FairuUserQuery, FairuUserQueryVariables>;
export const FairuWorkflowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuWorkflows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuWorkflows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkflowCore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkflowCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuWorkflow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"has_error"}},{"kind":"Field","name":{"kind":"Name","value":"last_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FairuWorkflowsQuery, FairuWorkflowsQueryVariables>;
export const FairuWorkflowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FairuWorkflow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fairuWorkflow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkflowCore"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkflowCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FairuWorkflow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"has_error"}},{"kind":"Field","name":{"kind":"Name","value":"last_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FairuWorkflowQuery, FairuWorkflowQueryVariables>;