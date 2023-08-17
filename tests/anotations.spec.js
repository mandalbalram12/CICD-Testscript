import { test, expect } from '@playwright/test';

test('Test:01 @Smoke',async({page})=> {
    console.log('This is Testcase:1');
});
test('Test:03 @Smoke',async({page})=> {
    console.log('This is Testcase:3');

});
test('Test:02 @Smoke @Regression',async({page})=> {
    console.log('This is Testcase:2');
});

test('Test:04 @Smoke',async({page})=> {
    console.log('This is Testcase:4');
});
test('Test:05 @Smoke',async({page})=> {
    console.log('This is Testcase:5');
});
test('Test:06 @Regression',async({page})=> {
    console.log('This is Testcase:6');
});
test('Test:07 @Regression',async({page})=> {
    console.log('This is Testcase:7');
});
