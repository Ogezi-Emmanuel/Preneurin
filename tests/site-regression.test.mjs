import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const root = 'c:\\Users\\user\\OneDrive\\Desktop\\Preneurin';

function readProjectFile(relativePath) {
  return readFileSync(path.join(root, relativePath), 'utf8');
}

test('homepage keeps the original vision video and uses the DASA hero video', () => {
  const homepage = readProjectFile(path.join('app', 'page.tsx'));

  assert.match(homepage, /IMG_5870\.MP4/);
  assert.match(homepage, /HERO_FALLBACK_IMAGE/);
  assert.match(homepage, /src="\/Preneurin Video\.mp4"/);
  assert.match(homepage, /Preneurin Interest Form/);
  assert.doesNotMatch(homepage, /api\.whatsapp\.com\/send\?phone=2340000000000/);
});

test('programs page only describes the current Preneurin offering', () => {
  const programsPage = readProjectFile(path.join('app', 'programs', 'page.tsx'));

  assert.match(programsPage, /one core offering: a live session format for fashion designers/i);
  assert.match(programsPage, /first session happened in April/i);
  assert.doesNotMatch(programsPage, /Monthly Q&A Sessions|Pricing Masterclass|Staffing & Production Systems|Client Management Bootcamp|Business Strategy Intensive|Peer Accountability Groups/);
});

test('initiatives page replaces the scholarship initiative with Studio Scale-Up Circle', () => {
  const initiativesPage = readProjectFile(path.join('app', 'initiatives', 'page.tsx'));

  assert.match(initiativesPage, /Studio Scale-Up Circle/);
  assert.match(initiativesPage, /Objective/);
  assert.match(initiativesPage, /Eligibility/);
  assert.match(initiativesPage, /Benefits/);
  assert.doesNotMatch(initiativesPage, /Scholarship/);
});

test('contact page includes the sponsorship inquiry workflow fields', () => {
  const contactPage = readProjectFile(path.join('app', 'contact', 'page.tsx'));

  assert.match(contactPage, /Sponsorship Inquiry/);
  assert.match(contactPage, /Organization Name/);
  assert.match(contactPage, /Budget Range/);
  assert.match(contactPage, /Interested Partnership Areas/);
  assert.match(contactPage, /secretariat@preneurin\.org/);
  assert.match(contactPage, /does not yet list sponsors or partners publicly/i);
});

test('first session page reflects real early-stage proof instead of fictional success stories', () => {
  const firstSessionPage = readProjectFile(path.join('app', 'success-stories', 'page.tsx'));

  assert.match(firstSessionPage, /Our First Session/);
  assert.match(firstSessionPage, /one live session in April/i);
  assert.match(firstSessionPage, /Damilola Obiesan/);
  assert.doesNotMatch(firstSessionPage, /Amara Okafor|Kofi Mensah|Zara Ibrahim|Grew revenue by 300%|Increased average order value by 150%/);
});

test('legacy marketing images are removed from the app routes', () => {
  const appFiles = [
    readProjectFile(path.join('app', 'page.tsx')),
    readProjectFile(path.join('app', 'about', 'page.tsx')),
    readProjectFile(path.join('app', 'initiatives', 'page.tsx')),
    readProjectFile(path.join('app', 'success-stories', 'page.tsx')),
  ].join('\n');

  assert.doesNotMatch(
    appFiles,
    /Our Story\.jpg|Damilola\.jpg|Amara Okafor\.jpg|Kofi Mensah\.jpg|Zara Ibrahim\.jpg|Designer Spotlight\.jpg|Industry Partnership\.jpg|Scholarship\.jpg|Resource Library\.jpg/
  );
});
