import { authorization } from './authorization';
import { checkBrowserAndVersion } from './checkBrowserAndVersion';
import { checkObjectTag } from './checkObjectTag';
import { checkValid } from './checkValid';
import { convertMetaToHeaders } from './convertMetaToHeaders';
import { deleteFileSafe } from './deleteFileSafe';
import { divideParts } from './divideParts';
import { encodeCallback } from './encodeCallback';
import { escapeName } from './escapeName';
import { formatObjKey } from './formatObjKey';
import { formatQuery } from './formatQuery';
import { formatTag } from './formatTag';
import { getPartSize } from './getPartSize';
import { getReqUrl } from './getReqUrl';
import { getResource } from './getResource';
import { getSourceName } from './getSourceName';
import { getStrBytesCount } from './getStrBytesCount';
import { isBlob } from './isBlob';
import { mergeDefault } from './mergeDefault';
import { obj2xml } from './obj2xml';
import { objectName } from './objectName';
import { objectUrl } from './objectUrl';
import { parseXML } from './parseXML';
import { policy2Str } from './policy2Str';
import { WebFileReadStream } from './webFileReadStream';
declare const _default: {
    authorization: typeof authorization;
    checkBrowserAndVersion: typeof checkBrowserAndVersion;
    checkBucketName: (name: string, createBucket?: boolean) => void;
    checkBucketTag: (tag: object) => void;
    checkObjectTag: typeof checkObjectTag;
    checkUserAgent: (ua: any) => any;
    checkValid: typeof checkValid;
    convertMetaToHeaders: typeof convertMetaToHeaders;
    deepCopy: (obj: any) => any;
    deleteFileSafe: typeof deleteFileSafe;
    divideParts: typeof divideParts;
    encodeCallback: typeof encodeCallback;
    escapeName: typeof escapeName;
    formatObjKey: typeof formatObjKey;
    formatQuery: typeof formatQuery;
    formatTag: typeof formatTag;
    getPartSize: typeof getPartSize;
    getReqUrl: typeof getReqUrl;
    getResource: typeof getResource;
    getSourceName: typeof getSourceName;
    getStrBytesCount: typeof getStrBytesCount;
    getUserAgent: () => any;
    isArray: (obj: any) => boolean;
    isBlob: typeof isBlob;
    isFile: (obj: any) => boolean;
    isIP: (host: any) => boolean;
    isObject: (obj: any) => boolean;
    mergeDefault: typeof mergeDefault;
    obj2xml: typeof obj2xml;
    objectName: typeof objectName;
    _objectName: typeof objectName;
    objectUrl: typeof objectUrl;
    parseXML: typeof parseXML;
    policy2Str: typeof policy2Str;
    signUtils: {
        buildCanonicalizedResource: typeof import("./signUtils").buildCanonicalizedResource;
        buildCanonicalString: typeof import("./signUtils").buildCanonicalString;
        computeSignature: typeof import("./signUtils").computeSignature;
        authorization: typeof import("./signUtils").authorization;
        _signatureForURL: typeof import("./signUtils")._signatureForURL;
    };
    WebFileReadStream: typeof WebFileReadStream;
};
export default _default;
