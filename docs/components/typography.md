<script setup>
import Typography from './demo/Typography/index.vue'
</script>

# NavBar

The `m-typography` Control text size, alignment, wrapping, overflow, transforms and more.

# API

## Examples

### h1

<br />

<DemoContainer>
  <Typography>Lorem ipsum dolor sit amet</Typography>
</DemoContainer>

<<< @/components/demo/Typography/default.vue

### h2

<br />

<DemoContainer>
  <Typography type="h2">Lorem ipsum dolor sit amet</Typography>
</DemoContainer>

<<< @/components/demo/Typography/h2.vue

### h3

<br />

<DemoContainer>
  <Typography type="h3">Lorem ipsum dolor sit amet</Typography>
</DemoContainer>

<<< @/components/demo/Typography/h3.vue

### Sub Title

<br />

<DemoContainer>
  <Typography type="subtitle">Lorem ipsum dolor sit amet</Typography>
</DemoContainer>

<<< @/components/demo/Typography/subtitle.vue

### Sub Title 2

<br />

<DemoContainer>
  <Typography type="subtitle2">Lorem ipsum dolor sit amet</Typography>
</DemoContainer>

<<< @/components/demo/Typography/subtitle2.vue

### Body

<br />

<DemoContainer>
  <Typography type="body">Lorem ipsum dolor sit amet</Typography>
</DemoContainer>

<<< @/components/demo/Typography/body.vue

### Description

<br />

<DemoContainer>
  <Typography type="description">Lorem ipsum dolor sit amet</Typography>
</DemoContainer>

<<< @/components/demo/Typography/description.vue

### Caption

<br />

<DemoContainer>
  <Typography type="caption">Lorem ipsum dolor sit amet</Typography>
</DemoContainer>

<<< @/components/demo/Typography/caption.vue

### Props

| Name | Type                                                                 | Default | Description |
| ---- | -------------------------------------------------------------------- | ------- | ----------- |
| type | `h1` `h2` `h3` `subtitle` `subtitle2` `body` `description` `caption` | h1      |             |

### Events

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
|      |            |             |

### Slots

| Name    | Parameters | Description           |
| ------- | ---------- | --------------------- |
| default |            | The default Vue slot. |
