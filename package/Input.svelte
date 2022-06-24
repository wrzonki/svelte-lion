<script>export let attributes;
export let validation;
</script>

<div class="input-wrapper">
	<input {...attributes} />
	<div class="tooltip">{JSON.stringify(validation)}</div>
</div>

<style></style>
