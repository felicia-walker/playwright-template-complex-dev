import { Locator } from 'playwright'
import { expect } from '@playwright/test'
export default class SampleActions {
    // Just a placeholder for this example

    private getValidLocator() {
        // Pretend we return a Playwright locator here
    }

    public async sampleActionMethod(text: string) {
        const locator: Locator = this.getValidLocator()
        await expect(locator).toContainText(text)
    }
}
