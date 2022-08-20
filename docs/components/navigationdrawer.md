<script setup>
import NavigationDrawer from './demo/NavigationDrawer/index.vue'
</script>

# NavigationDrawer

The `m-navigation-drawer` component is what your users will utilize to navigate through the application. The navigation-drawer is pre-configured to work with or without vue-router right out the box.

# API

## Examples

<DemoContainer>
  <NavigationDrawer />
</DemoContainer>

<<< @/components/demo/NavigationDrawer/index.vue

### Props

| Name     | Type           | Default | Description |
| -------- | -------------- | ------- | ----------- |
| location | `right` `left` | left    |             |

### Events

| Name  | Parameters | Description |
| ----- | ---------- | ----------- |
| model |            |             |
| model |            |             |

### Slots

| Name    | Parameters | Description           |
| ------- | ---------- | --------------------- |
| default |            | The default Vue slot. |
