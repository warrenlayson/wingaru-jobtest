<script lang="ts">
	import { data } from '../stores/data-store';
</script>

<h1 class="text-4xl text-center my-8">Form Results</h1>

<table class="min-w-full">
	<thead class="border-b">
		<tr>
			<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
				>Date Submitted</th
			>
			<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Full Name</th>
			<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Email</th>
			<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
				>Date of Birth</th
			>
			<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Age</th>
			<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
				>Favorite Color</th
			>
			<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
				>Color Preview</th
			>
		</tr>
	</thead>
	<tbody>
		{#each $data as item, idx (item.createdAt + '-' + idx)}
			<tr class="border-b">
				<td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
					>{item.createdAt}</td
				>
				<td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">{item.name}</td>
				<td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
					><a class="underline" href={`mailto:${item.email}`}>{item.email}</a>
				</td>
				<td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">{item.dob}</td>
				<td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">{item.age}</td>
				<td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">{item.color}</td>
				<td class={` px-6 py-4 `} style={`background-color: ${item.color};`} />
			</tr>
		{/each}
	</tbody>
</table>
