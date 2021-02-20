import { module, test } from 'qunit';
// import { visit, currentURL } from '@ember/test-helpers';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  // test('visiting /super-rentals', async function(assert) {
  //   await visit('/super-rentals');
  test('visiting /', async function(assert) {
    await visit('/');

    // assert.equal(currentURL(), '/super-rentals');
    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Super Rentals!')

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');
    assert.equal(currentURL(), '/getting-in-touch');

    // assert.dom('.jumbo a').hasText('jayprakash.dakshana15@gmail.com')
     assert.dom('.jumbo a').hasText('jayprakash.dakshana15@gmail.com')
    
     //think how to write test for 3rd p tag etc
  });

  test('visiting /getting-in-touch', async function(assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('h2').hasText('Contact Us');

    assert.dom('.jumbo a.button').hasText('About');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');

    
    assert.dom('.jumbo a').hasAnyText('jayprakash.dakshana15@gmail.com')
    //error comes bcz now we are at abut page which doesn't contail email
  });

});
