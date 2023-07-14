/**
 * @class MyTestController
 * Test conyroller for demonstration
 * @description Implements GET, POST, PUT, PATCH and DELETE methods
 * @author Isuru
 */

import {inject} from "@loopback/core";
import {get, param, post, put} from "@loopback/rest";
import {GET_EXTERNAL_DATA_SERVIE, GetExternalDataService} from "../services/get-external-data.service";

const PATH_IDENTIFIER = "automation";

export class MyTestController {
  constructor(
    @inject(GET_EXTERNAL_DATA_SERVIE) private getExternalDataService: GetExternalDataService,
  ) { }


  /**
   * @method get
   * @description Implements GET method
   * @returns {MyResponse} 
   * @memberof MyTestController
   * */
  @get(`/api/${PATH_IDENTIFIER}/test/get`)
  testGet(
  ): MyResponse {
    return {
      status: "success",
      message: `Hi`
    };
  }

  /**
   * @method post
   * @description Implements POST method
   * @param name 
   * @returns 
   */
  @post(`/api/${PATH_IDENTIFIER}/test/post`)
  testPost(
    @param.query.string('name', {required: true}) name: string,
  ): MyResponse {
    let response = `Hi ${name}`
    return {
      status: "success",
      message: response
    };
  }

  /**
   * @method PUT
   * @description Implements PUT method
   * @param name 
   * @returns 
   */
  @put(`/api/${PATH_IDENTIFIER}/test/put`)
  testPut(
    @param.query.string('name', {required: true}) name: string,
  ): MyResponse {
    let response = `Hi ${name}`
    return {
      status: "success",
      message: response
    };
  }

  /**
 * @method get
 * @description Implements GET method
 * @returns {MyResponse} 
 * @memberof MyTestController
 * */
  @get(`/external-data`)
  async externalGet(
  ): Promise<MyResponse> {
    let response: MyResponse = {
      status: "pending",
      message: `Pending get external data`
    }
    try {
      let data = await this.getExternalDataService.getExternalData()
      response = {
        status: "success",
        message: `External data retrieved successfully`,
        data: data
      }
    } catch (err) {
      response = {
        status: "error",
        message: `Error occurred while getting external data`,
      }
    }
    return response;
  }

}

export interface MyResponse {
  status: string;
  message: string;
  data?: any;
}
