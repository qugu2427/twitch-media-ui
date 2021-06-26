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
            Video must meet criteria (see duration limit in settings & info)
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
        <br /><b>Duration Limit</b><br />
        &emsp;{{ durationLimit }}
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
        <code>!durationLimit <i>&lt;seconds&gt;</i></code
        ><br />
        Set max duration of a video in seconds.
        <ul>
          <li>
            Range from 10 to 3600(1 hour)
          </li>
          <li>
            Does not remove existing media from queue
          </li>
        </ul>
        <br /><br /><code>!patrick</code><br />
        Enqueues patrick riding seahorse
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Support</v-expansion-panel-header>
      <v-expansion-panel-content>
        Staring the project on Github would be appreciated
        <div class="d-flex mt-2">
          <a
            href="https://github.com/qugu2427/twitch-media-ui"
            class="text-decoration-none mr-2"
          >
            <div>
              <v-btn outlined tile dark>
                <v-icon left>mdi-github</v-icon>
                Frontend
              </v-btn>
            </div>
          </a>
          <a
            href="https://github.com/qugu2427/twitch-media-api"
            class="text-decoration-none"
          >
            <div>
              <v-btn outlined tile dark>
                <v-icon left>mdi-github</v-icon>
                Backend
              </v-btn>
            </div>
          </a>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    connections: Number,
    online: Boolean,
    durationLimit: String,
  },
};
</script>

<style></style>
