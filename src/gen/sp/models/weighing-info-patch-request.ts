/* tslint:disable */
/* eslint-disable */
import { ArrayOfId } from './array-of-id';
import { SpPatchDocument } from './sp-patch-document';

/**
 * An object containing list weiginfo id and Patch
 */
export interface WeighingInfoPatchRequest {
  SPPatchDocument: SpPatchDocument[];
  wghIds: ArrayOfId;
}
