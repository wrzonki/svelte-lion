/** @typedef {typeof __propDef.props}  SvelteLionProps */
/** @typedef {typeof __propDef.events}  SvelteLionEvents */
/** @typedef {typeof __propDef.slots}  SvelteLionSlots */
export default class SvelteLion extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SvelteLionProps = typeof __propDef.props;
export type SvelteLionEvents = typeof __propDef.events;
export type SvelteLionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
