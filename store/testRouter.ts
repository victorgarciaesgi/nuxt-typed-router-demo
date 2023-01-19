import { useRouter, useRoute } from '@typed-router';

/**
 * Stackblitz does not support Typescript on `.vue` files yet,
 * so to test `<NuxtLink/>` you have to clone and open VSCode localy.
 */

const router = useRouter();

// @ts-expect-error
router.push({ name: 'user-id' }); // Error

// @ts-expect-error
router.push({ name: 'user-id', params: { foo: 'bar' } }); // Error

router.push({ name: 'user-id', params: { id: 1 } }); // Good
router.push({ name: 'user-foo-bar', params: { foo: 1 } }); // Good

const route = useRoute('user-foo-bar');

// @ts-expect-error
route.params.id;

route.params.bar;

const route2 = useRoute();

if (route2.name === 'user-id-posts') {
  console.log(route2.params); // Try autocomplete here
}
