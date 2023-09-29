export default function getExtensionOfFile(name: string): string {
  return name.split('.').reverse()[0];
}