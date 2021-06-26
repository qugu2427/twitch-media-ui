<template>
  <v-expansion-panels tile style="width: 640px;">
    <v-expansion-panel>
      <v-expansion-panel-header>Commands</v-expansion-panel-header>
      <v-expansion-panel-content>
        <code>!queue <i>&lt;youtube id&gt;</i></code
        ><br />
        Enques a youtube video.
        <ul>
          <li>
            Do not pass the whole URL, just the video ID.
          </li>
          <li>
            Video length limited to 4 minutes (for testing)
          </li>
        </ul>
        <br />
        <code>!boo</code><br />
        Boos the video video. If enough users boo the video will be skipped.
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>It Don't Work</v-expansion-panel-header>
      <v-expansion-panel-content>
        <ul>
          <li>
            Turn adblock off and refresh.
          </li>
          <li>
            Hard refresh (Ctrl+F5).
          </li>
          <li>
            Try using a different browser.
          </li>
          <li>
            Verify it is not a problem between you and youtube (such as video
            being region restricted).
          </li>
          <li>
            Report issue on Github.
          </li>
        </ul>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Settings & Info</v-expansion-panel-header>
      <v-expansion-panel-content>
        <b>Connections</b><br />
        &emsp;{{ connections }} <br /><b>Backend Connection</b><br />
        &emsp;<span :class="online ? 'green--text' : 'red--text'">{{
          online ? "online" : "offline"
        }}</span>
        <br /><b>Max Video Length</b><br />
        &emsp;{{ maxVideoLength }}
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Mod Commands</v-expansion-panel-header>
      <v-expansion-panel-content>
        <code>!skip</code><br />
        Force skips the current video.
        <v-alert type="error" tile dense>
          Use this command sparingly. Overuse may cause lag or a crash. </v-alert
        ><br />
        <code>!patrick</code><br />
        Enqueues patrick riding seahorse
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    connections: Number,
    online: Boolean,
    maxVideoLength: String,
  },
};
</script>

<style></style>
