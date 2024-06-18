import type { UserInterface } from '$lib/interface';
import { writable, type Writable } from 'svelte/store';

export const loginSession = <Writable<UserInterface>>writable(undefined);
