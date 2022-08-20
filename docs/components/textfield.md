<script setup>
import TextField from './demo/TextField/index.vue'
</script>

# TextField

The `m-text-field` fields components are used for collecting user provided information.

# API

## Examples

### Default

<br />

<DemoContainer>
  <TextField />
</DemoContainer>

<<< @/components/demo/TextField/index.vue

### Placeholder color

<br />

<DemoContainer>
  <TextField placeholder="Placeholder" placeholderColor="red" />
</DemoContainer>

<<< @/components/demo/TextField/placeholder-color.vue

### Disabled

<br />

<DemoContainer>
  <TextField disabled placeholder="Disabled"/>
</DemoContainer>

<<< @/components/demo/TextField/disabled.vue

### Error

<br />

<DemoContainer>
  <TextField icon="fa-solid fa-lock" error errorMessage="User or password wrong!" />
</DemoContainer>

<<< @/components/demo/TextField/error.vue

### Props

| Name             | Type    | Default | Description                                     |
| ---------------- | ------- | ------- | ----------------------------------------------- |
| placeholder      | string  |         | Sets the input’s placeholder text               |
| label            | string  |         | Replaces the default label                      |
| count            | boolean |         | Show count of the text                          |
| maxLength        | number  |         | Set how many words can be use in the text field |
| icon             | string  |         | Use icon in the text field                      |
| mask             | string  |         | Set mask to text field                          |
| placeholderColor | string  |         | Set color to placeholder text                   |
| disabled         | boolean | false   | Disable text input                              |
| error            | boolean | false   | Set if input is error                           |
| errorMessage     | string  |         | Set error message                               |

### Events

| Name   | Parameters | Description                                           |
| ------ | ---------- | ----------------------------------------------------- |
| blur   | Event      | Emitted when the input is blurred                     |
| change | any        | Emitted when the input is changed by user interaction |
| focus  | Event      | Emitted when component is focused                     |

### Slots

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
|      |            |             |
