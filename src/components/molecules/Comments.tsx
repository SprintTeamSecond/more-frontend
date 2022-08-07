import {Typography} from 'src/components/atoms';
import * as React from 'react';

export const Comments: React.FC = () => {
  const commentRef = React.useRef<HTMLDivElement>(null);
  const [status, setStatus] = React.useState<string>('');

  React.useEffect(() => {
    const utterances = document.createElement('script');

    utterances.onload = () => setStatus('success');
    utterances.onerror = () => setStatus('failed');
    utterances.async = true;
    utterances.src = 'https://utteranc.es/client.js';
    utterances.setAttribute('repo', 'SprintTeamSecond/comment');
    utterances.setAttribute('issue-term', 'pathname');
    utterances.setAttribute('theme', 'github-light');
    utterances.setAttribute('crossorigin', 'anonymous');

    if (commentRef.current?.childNodes.length === 0)
      commentRef.current?.appendChild(utterances);
  }, []);

  return (
    <React.Fragment>
      {status === 'failed' && <Typography>Error. Please try again.</Typography>}
      {status === 'pending' && <Typography>Loading script...</Typography>}
      <div className="comments" ref={commentRef}></div>
    </React.Fragment>
  );
};
