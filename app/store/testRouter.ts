import { useRouter, useRoute, navigateTo } from '@typed-router';

/**
 * Stackblitz does not support Typescript on `.vue` files yet,
 * so to test `<NuxtLink/>` you have to clone and open VSCode localy.
 *
 */

const router = useRouter();

const id = 'iieud88';

router.push('/'); // Try autocomplete here (ctrl+space)

router.push(`/user/${id}`);
router.push(`/user/${id}?foo=bar`);
router.push(`/user/${id}#anchor`);

router.push(`/user/${id}/bar`); // Error ❌
router.push(`/user///H367`); // Error ❌

navigateTo({ name: 'user-foo-bar', params: { foo: 'bar' } });

navigateTo('/lhflzfezhf'); // Error ❌
navigateTo('/lhflzfezhf', { external: true });

router.push({ name: 'user-id' }); // Error ❌

router.push({ name: 'user-id', params: { foo: 'bar' } }); // Error ❌

router.push({ name: 'user-id', params: { id: 1 } });
router.push({ name: 'user-foo-bar', params: { foo: 1 } });

const route = useRoute('user-foo-bar');

route.params.id; // Error ❌

route.params.bar;

const route2 = useRoute();

if (route2.name === 'user-id-posts') {
  console.log(route2.params); // Try autocomplete here
}
