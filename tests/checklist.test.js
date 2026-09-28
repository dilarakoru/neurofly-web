import test from 'node:test';
import assert from 'node:assert/strict';
import { parseProgress, toggleLesson } from '../src/lib/checklist.js';
test('corrupt and unknown storage entries do not become progress',()=>{assert.deepEqual(parseProgress('broken'),[]);assert.deepEqual(parseProgress('{"platform":true}'),[]);assert.deepEqual(parseProgress('["platform","platform","evil"]'),['platform']);});
test('a completed lesson can be toggled without mutating the input',()=>{const initial=['platform'];const next=toggleLesson(initial,'python');assert.deepEqual(initial,['platform']);assert.deepEqual(next,['platform','python']);assert.deepEqual(toggleLesson(next,'platform'),['python']);assert.deepEqual(toggleLesson(initial,'unknown'),initial);});
