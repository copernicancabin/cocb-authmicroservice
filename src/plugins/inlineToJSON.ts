/* eslint-disable no-param-reassign */
import { Document } from 'mongoose';
/**
 * A mongoose schema plugin which allows user to hide fields dynamically using a hide option
 */

const inlineToJSON = (schema: any) => {
  schema.options.toJSON = {};
  schema.options.toJSON.hide = '';
  schema.options.toJSON.transform = function (doc: Document, ret: any, options: Record<string, any>) {
    if (options['hide']) {
      options['hide'].split(' ').forEach(function (prop: string) {
        delete ret[prop];
      });
    }
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
    return ret;
  };
};

export default inlineToJSON;
