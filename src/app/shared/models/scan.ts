import { Asset } from './asset';
import { Severity } from './severity';
import { Vulnerability } from './vulnerability';

export interface Scan {
  dateStarted: string,
  datCompleted: string,
  name: string,
  status: string,
  scanners: string[],
  severityCounts: Severity,
  assets: Asset[],
  vulnerabilities: Vulnerability[]
}
