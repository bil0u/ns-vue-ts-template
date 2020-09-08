<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home" />
        </ActionBar>

        <GridLayout>
            <Label class="info" horizontalAlignment="center" verticalAlignment="center">
                <FormattedString>
                    <Span :text="message"/>
                </FormattedString>
            </Label>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
    get message() {
        return "Hello World !";
    }
}
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../styles/variables';
    // End custom common variables

    // Custom styles
    .info {
        font-size: 20;
    }
</style>
