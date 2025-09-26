import { notFound } from 'next/navigation';
import { headers } from 'next/headers';

export default function KeystaticPage() {
  const headersList = headers();
  const host = headersList.get('host') || '';

  // Only allow on preview.tootie.space or localhost
  const isAllowed = host.includes('preview.tootie.space') ||
                   host.includes('localhost') ||
                   host.includes('127.0.0.1');

  if (!isAllowed) {
    notFound();
  }

  // Dynamically import and render Keystatic only if allowed
  const KeystaticAdmin = require('@keystatic/next/ui/app').makePage(
    require('../../../keystatic.config').default
  );

  return <KeystaticAdmin />;
}
