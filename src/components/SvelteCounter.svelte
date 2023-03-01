<script lang="ts">
  import { count, addOne, subtractOne } from "../countStore";


</script>

<div class="counter ">
  <button class="btn" on:click={subtractOne}>-</button>
  <pre>{$count}</pre>
  <button class="btn" on:click={addOne}>+</button>
</div>
<div class="counter-message">
  <slot />
</div>

<!-- <script lang="ts">
	let count = 0;

	function add() {
		count += 1;
	}

	function subtract() {
		count -= 1;
	}
</script>

<div class="counter">
	<button on:click={subtract}>-</button>
	<pre>{count}</pre>
	<button on:click={add}>+</button>
</div>
<div class="counter-message">
	<slot />
</div> -->
