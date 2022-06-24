<script lang="ts">
  export let attributes: any;
  export let validation: any;
</script>

<div class="input-wrapper">
  <input { ...attributes } />
  <div class="tooltip">{JSON.stringify(validation)}</div>
</div>


<style></style>