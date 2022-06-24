<script lang="ts">
  import Input from "$lib/Input.svelte";

  const validate = () => {
    console.log();
    console.log('validation');
    return { error: 'this is an error' };
  }

  const attributes = {
    type: 'number',
  }
</script>

<Input {attributes}/>