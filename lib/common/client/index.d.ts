import { _bucketRequestParams } from './_bucketRequestParams';
import { _checkUserAgent } from './_checkUserAgent';
import { _createRequest } from './_createRequest';
import { _getReqUrl } from './_getReqUrl';
import { _getResource } from './_getResource';
import { _getUserAgent } from './_getUserAgent';
import { _objectRequestParams } from './_objectRequestParams';
import { _stop } from './_stop';
import { getBucket } from './getBucket';
import { request } from './request';
import { requestError } from './requestError';
import { setBucket } from './setBucket';
import { setSLDEnabled } from './setSLDEnabled';
import { signature } from './signature';
declare const _default: {
    _bucketRequestParams: typeof _bucketRequestParams;
    _checkUserAgent: typeof _checkUserAgent;
    _createRequest: typeof _createRequest;
    _getReqUrl: typeof _getReqUrl;
    _getResource: typeof _getResource;
    _getUserAgent: typeof _getUserAgent;
    _objectRequestParams: typeof _objectRequestParams;
    _stop: typeof _stop;
    getBucket: typeof getBucket;
    request: typeof request;
    requestError: typeof requestError;
    setBucket: typeof setBucket;
    useBucket: typeof setBucket;
    setSLDEnabled: typeof setSLDEnabled;
    signature: typeof signature;
};
export default _default;
