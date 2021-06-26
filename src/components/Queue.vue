<template>
  <v-card tile class="d-flex flex-column ma-5" style="width: 640px;">
    <div class="px-3 py-1">
      <div class="d-flex justify-space-between">
        <div class="mr-5">
          <div class="text-overline">queue</div>
          <div class="text-h6 mt-n3">{{ queue.length }}/20</div>
        </div>
        <div>
          <div class="text-overline">
            Added by {{ addedBy }} - {{ duration }}
          </div>
          <div class="text-h6 mt-n3">{{ name }}</div>
        </div>
      </div>
    </div>
    <v-list style="height: 356px;" class="overflow-y-auto">
      <template v-for="(item, index) in queue">
        <v-list-item :key="index">
          <v-list-item-avatar left color="transparent"
            >#{{ index + 1 }}</v-list-item-avatar
          >
          <v-list-item-content color="yellow">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.addedBy }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    queue: {
      type: Array,
      default: function() {
        return [];
      },
    },
    name: { type: String, default: "" },
    addedBy: { type: String, default: "" },
    duration: { type: String, default: "" },
  },
};
</script>

<style></style>
