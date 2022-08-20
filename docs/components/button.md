<script setup>
import Button from './demo/Button/index.vue'
</script>

# Button

The `m-button` component replaces the standard html button.

## Examples

### Primary

<br />

<DemoContainer>
  <Button>Primary</Button>
</DemoContainer>

<<< @/components/demo/Button/primary.vue

### Ghost

<br>

<DemoContainer>
  <Button type="ghost">Ghost</Button>
</DemoContainer>

<<< @/components/demo/Button/ghost.vue

### Inactive Button

<br>

<DemoContainer>
  <Button disabled>Disabled</Button>
</DemoContainer>

<<< @/components/demo/Button/ghost.vue

### Text with Icon

<br>

<DemoContainer>
  <Button iconName="test">Text with Icon</Button>
</DemoContainer>

<<< @/components/demo/Button/textWithIcon.vue

### Icon

<br>

<DemoContainer>
  <Button iconName="test" icon />
</DemoContainer>

<<< @/components/demo/Button/icon.vue

### Props

| Name     | Type    | Default | Description             |
| -------- | ------- | ------- | ----------------------- |
| type     | string  | primary | Choose type to button   |
| disabled | boolean | false   | Disable button          |
| icon     | boolean | false   | Hide text in the button |
| iconName | string  |         | Choose icon             |
| maxWidth | string  |         | Set maxWidth to button  |

### Events

| Name  | Parameters | Description                                         |
| ----- | ---------- | --------------------------------------------------- |
| click |            | Event that is emitted when the component is clicked |

### Slots

| Name    | Parameters | Description           |
| ------- | ---------- | --------------------- |
| default |            | The default Vue slot. |
