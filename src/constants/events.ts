export const TREE_EVENTS = {
  onToggleExpanded: 'onToggleExpanded',
  onActivate: 'onActivate',
  onDeactivate: 'onDeactivate',
  onFocus: 'onFocus',
  onBlur: 'onBlur',
  onInitialized: 'onInitialized',
  onUpdateData: 'onUpdateData',
  onMoveNode: 'onMoveNode',
  onEvent: 'onEvent',
  onLoadChild: 'onLoadChild',
  onChangeFilter: 'onChangeFilter',

  toggleExpanded: 'toggleExpanded',
  activate: 'activate',
  deactivate: 'deactivate',
  focus: 'focus',
  blur: 'blur',
  initialized: 'initialized',
  updateData: 'updateData',
  moveNode: 'moveNode',
  event: 'event',
  loadChild: 'loadChild',
  changeFilter: 'changeFilterr'
};

export function newName(name) {
  return name[2].toLowerCase() + name.slice(3);
}
