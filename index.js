'use strict';

const Acl = require('acl2');
const AclKnexBackend = require('./acl/knex-backend');
const knex = require('knex');

const db = knex({
  client: 'postgres',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'acl_test'
  }
});

const acl = new Acl(new AclKnexBackend({ db, client: 'postgres', prefix: 'acl_' }));

async function run() {
  // const roles =  await db.from('acl_roles');
  // console.log('roles', roles);
  const result = await acl.isAllowed("joed", "blogs", "view")

  console.log('is joed allowed', result)
}
run();