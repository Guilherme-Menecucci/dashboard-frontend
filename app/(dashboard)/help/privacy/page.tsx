import { Metadata } from 'next';
import Typography from '~@components/Typography';

export const metadata: Metadata = {
  title: 'Plan-O-Rama - Privacy Notice',
};

export default function Page() {
  return (
    <article className="mx-auto w-full max-w-[860px]">
      <Typography component="h1" variant="heading" size="large" className="mb-4">
        Privacy Notice
      </Typography>

      <Typography component="p" variant="body" size="small">
        Last Update: June 23, 2023
      </Typography>

      <div className="my-10 border-[1px] border-brutal-secondary" />

      <section className="mb-10">
        <Typography component="h2" variant="title" size="large" className="mb-4">
          Information Collection
        </Typography>

        <Typography component="p" variant="body" size="small">
          When you access this website, certain personal information may be collected, such as name,
          email address, phone number, and others if you choose to provide them voluntarily.
          Additionally, we may use cookies and similar technologies to collect information about
          your interaction with the website, including pages visited, time spent, and other data.
        </Typography>
      </section>

      <section className="mb-10">
        <Typography component="h2" variant="title" size="large" className="mb-4">
          Use of Information
        </Typography>

        <Typography component="p" variant="body" size="small">
          The collected information will be used solely for the purposes described on this website
          and will not be shared with third parties without your consent, unless necessary to comply
          with legal obligations or in specific cases mentioned in this privacy notice.
        </Typography>
      </section>

      <section className="mb-10">
        <Typography component="h2" variant="title" size="large" className="mb-4">
          Information Security
        </Typography>

        <Typography component="p" variant="body" size="small">
          We make efforts to ensure the security of users&apos; personal information on this website
          by implementing appropriate measures to protect against unauthorized access, alteration,
          disclosure, or destruction. However, please note that no transmission of data over the
          internet is completely secure, and we cannot guarantee the absolute security of the
          information provided.
        </Typography>
      </section>

      <section className="mb-10">
        <Typography component="h2" variant="title" size="large" className="mb-4">
          Cookies and Similar Technologies
        </Typography>

        <Typography component="p" variant="body" size="small">
          This website uses cookies and similar technologies to enhance user experience, personalize
          content and ads, provide social media features, and analyze website traffic. By continuing
          to use this website, you consent to the use of these technologies.
        </Typography>
      </section>

      <section className="mb-10">
        <Typography component="h2" variant="title" size="large" className="mb-4">
          Links to Third-Party Websites
        </Typography>

        <Typography component="p" variant="body" size="small">
          This website may contain links to other third-party websites. We are not responsible for
          the privacy policies or content of those websites. We recommend reviewing the privacy
          policies of those third parties before providing any personal information.
        </Typography>
      </section>
      <section className="mb-10">
        <Typography component="h2" variant="title" size="large" className="mb-4">
          Changes to this Privacy Notice
        </Typography>

        <Typography component="p" variant="body" size="small">
          We may update this privacy notice periodically to reflect any changes in privacy
          practices. We recommend visiting this page regularly to stay informed about updates.
        </Typography>
      </section>

      <section className="mb-10">
        <Typography component="h2" variant="title" size="large" className="mb-4">
          Contact
        </Typography>

        <Typography component="p" variant="body" size="small">
          If you have any questions, concerns, or requests related to this privacy notice, please
          contact us through the channels provided on this website.
        </Typography>
      </section>
    </article>
  );
}
