import { DataURL } from "./models";
import axios from 'axios';
const validator = require('validator');
// import isURL from 'validator/es/lib/isURL';


/**
 * A convinience method to download the [[DataURL]] of a file
 * @param url The url
 * @param optionsOverride You can use this to override the [axios request config](https://github.com/axios/axios#request-config)
 * @returns Promise<DataURL>
 */
export async function getDUrl(url: string, optionsOverride: any = {}, returnBuffer : boolean = false){
    try {
      const res = await axios({
          method:"get",
          url,
          headers: {
            'DNT':1,
            'Upgrade-Insecure-Requests':1
          },
          ...optionsOverride,
          responseType: 'arraybuffer'
        });
      const dUrl : DataURL = `data:${res.headers['content-type']};base64,${Buffer.from(res.data, 'binary').toString('base64')}`;
      return returnBuffer ? res.data : dUrl ;
    } catch (error) {
      console.log("TCL: getDUrl -> error", error)
    }
  }
  
  /**
   * Use this to extract the mime type from a [[DataURL]]
   */
  export function base64MimeType(dUrl : DataURL) {
    var result = null;
    if (typeof dUrl !== 'string') {
      return result;
    }
    var mime = dUrl.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    if (mime && mime.length) {
      result = mime[1];
    }
    return result;
  }

  export const durlOrBase64ToBuffer = durl => Buffer.from(durl.replace(/^data:(image|video)\/(png|gif|jpeg|webp);base64,/,''), 'base64');

  /**
   * Check if a string is actually a DataURL
   * @param s The string to check
   */
export const isDataURL = (s: string) => !!s.match(/^data:((?:\w+\/(?:(?!;).)+)?)((?:;[\w\W]*?[^;])*),(.+)$/g);

export const isBase64 = (s: string) => /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(s)

export const isUrl = (s: string) => validator.isURL(s)