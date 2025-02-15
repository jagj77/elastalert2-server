// Defines the config's Joi schema
import Joi from 'joi';

const schema = Joi.object().keys({
  'appName': Joi.string().default('elastalert-server'),
  'es_host': Joi.string().default(process.env.ES_HOST ?? 'elastalert'),
  'es_port': Joi.number().default(process.env.ES_PORT ?? 9200),
  'es_username': Joi.string().default(process.env.ES_USERNAME ?? ''),
  'es_password': Joi.string().default(process.env.ES_PASSWORD ?? ''),
  'es_ssl': Joi.boolean().default(false),
  'ea_verify_certs': Joi.boolean().default(false),
  'es_ca_certs': Joi.string().default(''),
  'es_client_cert': Joi.string().default(''),
  'es_client_key': Joi.string().default(''),
  'writeback_index': Joi.string().default('elastalert_status'),
  'port': Joi.number().default(3030),
  'wsport': Joi.number().default(3333),
  'elastalertPath': Joi.string().default('/opt/elastalert'),
  'start': Joi.date().iso(),
  'end': Joi.date().iso().greater(Joi.ref('start')),
  'verbose': Joi.boolean().default(false),
  'es_debug': Joi.boolean().default(false),
  'debug': Joi.boolean().default(false),
  'prometheus_port': Joi.number().default(null),
  'rulesPath': Joi.object().keys({
    'relative': Joi.boolean().default(true),
    'path': Joi.string().default('/rules')
  }).default(),
  'templatesPath': Joi.object().keys({
    'relative': Joi.boolean().default(true),
    'path': Joi.string().default('/rule_templates')
  }).default(),
  'dataPath': Joi.object().keys({
    'relative': Joi.boolean().default(true),
    'path': Joi.string().default('/server_data')
  }).default()
}).default();

export default schema;
