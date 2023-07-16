import {injectable, /* inject, */ BindingScope, BindingKey} from '@loopback/core';
import axios from 'axios';

@injectable({scope: BindingScope.TRANSIENT})
export class GetExternalDataService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * Add service methods here
   */

  /**
   * @description Get external data from https://jsonplaceholder.typicode.com/posts
   * @returns {Promise<any>}
   */
  async getExternalData() {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
}

export const GET_EXTERNAL_DATA_SERVIE = BindingKey.create<GetExternalDataService>('service.getExternalData');