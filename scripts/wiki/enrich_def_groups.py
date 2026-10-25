"""Prepare compact DEF group metadata without decoding or loading browser images."""
import json
import sys
from pathlib import Path
from formats import def_header, def_group_summary


def enrich_def_groups(root):
    path = root / 'content/wiki/_registry/pages.json'
    pages = json.loads(path.read_text(encoding='utf-8'))
    summaries = {}
    for page in pages:
        for section in page['sections']:
            for resource in section['resources']:
                if resource['kind'] != 'def':
                    continue
                if resource['id'] not in summaries:
                    data = (root / 'static' / resource['original'].lstrip('/')).read_bytes()
                    summaries[resource['id']] = def_group_summary(def_header(data)[3])
                resource['frameGroups'] = summaries[resource['id']]
    path.write_text(json.dumps(pages, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    enrich_def_groups(Path(sys.argv[1]).resolve())
