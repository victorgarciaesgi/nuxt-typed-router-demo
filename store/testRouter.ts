import { useTypedRouter, useTypedRoute } from '@typed-router';

/**
 * Stackblitz does not support Typescript on `.vue` files yet, to to test `<NuxtLink/>`
 * you clone and open VSCode localy.
 */

const router = useTypedRouter();

// @ts-expect-error
router.push({ name: 'user-id' }); // Error

// @ts-expect-error
router.push({ name: 'user-id', params: { foo: 'bar' } }); // Error

router.push({ name: 'user-id', params: { id: 1 } }); // Good
router.push({ name: 'user-foo-bar', params: { foo: 1 } }); // Good

const route = useTypedRoute('user-foo-bar');

// @ts-expect-error
route.params.id;

route.params.bar;

const route2 = useTypedRoute();

if (route2.name === 'user-id-posts') {
  console.log(route2.params); // Try autocomplete here
}
