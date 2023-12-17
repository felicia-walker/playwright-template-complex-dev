import { test } from '@playwright/test'
import { sampleActionMethod } from 'ui-library/SampleActions'
import { sampleServiceMethod } from 'api-library/SampleService'
import { sampleModelMethod } from 'data-library/SampleModel'

test('Successful login', async () => {
    sampleModelMethod()
    sampleActionMethod()
    sampleServiceMethod()
})
