export const teams = [
  {
    name: "Graphics",
    id: "graphics",
    positions: [
      { name: "Lead", id: "graphicsLead" },
      { name: "Executive", id: "graphicsExec" },
      { name: "Head", id: "graphicsHead" },
    ],
  },
  {
    name: "Media",
    id: "media",
    positions: [
      { name: "Lead", id: "mediaLead" },
      { name: "Executive", id: "mediaExec" },
      { name: "Head", id: "mediaHead" },
    ],
  },
  {
    name: "Social Media",
    id: "socialMedia",
    positions: [
      { name: "Lead", id: "socialMediaLead" },
      { name: "Executive", id: "socialMediaExec" },
      { name: "Head", id: "socialMediaHead" },
    ],
  },
  {
    name: "Technical",
    id: "technical",
    positions: [
      { name: "Lead", id: "technicalLead" },
      { name: "Executive", id: "technicalExec" },
      { name: "Head", id: "technicalHead" },
    ],
  },
  {
    name: "Outreach",
    id: "outreach",
    positions: [
      { name: "Lead", id: "outreachLead" },
      { name: "Executive", id: "outreachExec" },
      { name: "Head", id: "outreachHead" },
    ],
  },
  {
    name: "Events",
    id: "events",
    positions: [
      { name: "Lead", id: "eventsLead" },
      { name: "Executive", id: "eventsExec" },
      { name: "Head", id: "eventsHead" },
    ],
  },
  {
    name: "Content",
    id: "content",
    positions: [
      { name: "Lead", id: "contentLead" },
      { name: "Executive", id: "contentExec" },
      { name: "Head", id: "contentHead" },
    ],
  },
  {
    name: "HR",
    id: "hr",
    positions: [
      { name: "Lead", id: "hrLead" },
      { name: "Executive", id: "hrExec" },
      { name: "Head", id: "hrHead" },
    ],
  },
  {
    name: "Logistics",
    id: "logistics",
    positions: [
      { name: "Lead", id: "logisticsLead" },
      { name: "Executive", id: "logisticsExec" },
      { name: "Head", id: "logisticsHead" },
    ],
  },
];

export const resps = new Map();

resps.set("Logistics-Lead", [
  "Leading the logistics team and overseeing all logistical activities.",
  "Planning and coordinating logistics for club events and activities.",
  "Managing inventory and procurement of necessary supplies.",
  "Supervising the setup and teardown of event venues.",
  "Ensuring timely delivery and return of equipment and materials.",
  "Collaborating with other teams to ensure smooth event execution.",
  "Handling any logistical issues or emergencies during events.",
]);

resps.set("Logistics-Executive", [
  "Assisting in logistical activities and initiatives.",
  "Supporting the coordination of logistics for club events and activities.",
  "Assisting in inventory management and procurement processes.",
  "Assisting in event setup and teardown activities.",
  "Ensuring equipment and materials are delivered and returned on time.",
  "Collaborating with the logistics team to execute events smoothly.",
  "Assisting in handling logistical issues or emergencies during events.",
]);

resps.set("Logistics-Head", [
  "Assisting the Logistics Team Lead in overseeing logistical activities.",
  "Coordinating logistics for club events and activities.",
  "Assisting in inventory management and procurement processes.",
  "Supervising event setup and teardown activities.",
  "Ensuring equipment and materials are delivered and returned on time.",
  "Collaborating with the logistics team to execute events smoothly.",
  "Assisting in handling logistical issues or emergencies during events.",
]);

resps.set("Hr-Lead", [
  "Leading the HR team and overseeing all HR-related activities.",
  "Developing and implementing HR policies and procedures.",
  "Conducting recruitment processes, including interviews and onboarding.",
  "Managing employee relations, including conflict resolution and performance management.",
  "Overseeing training and development programs for club members.",
  "Ensuring compliance with legal and regulatory requirements.",
  "Creating a positive and inclusive work environment within the club.",
]);

resps.set("Hr-Executive", [
  "Assisting in HR activities and initiatives.",
  "Supporting the implementation of HR policies and procedures.",
  "Participating in recruitment and onboarding processes.",
  "Contributing to employee relations and performance management efforts.",
  "Participating in training and development programs for club members.",
  "Ensuring compliance with legal and regulatory requirements.",
  "Contributing to a positive and inclusive work environment within the club.",
]);

resps.set("Hr-Head", [
  "Assisting the HR Team Lead in overseeing HR activities.",
  "Implementing HR policies and procedures in line with club objectives.",
  "Assisting in recruitment processes and onboarding activities.",
  "Supporting employee relations and performance management efforts.",
  "Coordinating training and development programs for club members.",
  "Ensuring compliance with legal and regulatory requirements.",
  "Contributing to a positive and inclusive work environment within the club.",
]);

resps.set("Content-Lead", [
  "Leading the content team and overseeing all content creation projects.",
  "Setting the content strategy and ensuring it aligns with the club's objectives.",
  "Managing a team of content creators, assigning tasks, and ensuring timely delivery of projects.",
  "Reviewing and editing content to maintain high-quality standards and adherence to style guidelines.",
  "Collaborating with other teams to integrate content seamlessly into club activities.",
  "Brainstorming and conceptualizing creative content ideas for various platforms.",
  "Keeping up-to-date with industry trends and best practices in content creation.",
]);

resps.set("Content-Executive", [
  "Creating engaging and informative content for the club's events, workshops, and promotions.",
  "Writing articles, blog posts, and social media updates to promote club activities.",
  "Collaborating with the Content Team Head to ensure content adheres to established guidelines.",
  "Incorporating feedback and making revisions to content as needed.",
  "Assisting in creating written materials for presentations and workshops.",
  "Maintaining an organized library of content assets for future use.",
  "Contributing to the overall content efforts of the club.",
]);

resps.set("Content-Head", [
  "Leading the content team in creating engaging and informative content for club events and promotions.",
  "Setting content guidelines and ensuring consistency across all club materials.",
  "Collaborating with the Content Team Lead to assign and manage content creation tasks effectively.",
  "Assisting in the review and refinement of content to maintain high-quality standards.",
  "Coordinating with other teams to align content with overall club objectives.",
  "Contributing to the conceptualization and execution of content projects.",
  "Staying updated with industry trends and best practices in content creation.",
]);

resps.set("Events-Lead", [
  "Leading the events team and overseeing all event planning activities.",
  "Conceptualizing, planning, and executing a variety of club events.",
  "Coordinating with vendors, sponsors, and venues for event logistics.",
  "Managing event budgets, including expenses and revenue generation.",
  "Ensuring all events run smoothly and meet club and participant expectations.",
  "Collaborating with other teams to integrate events into club activities.",
  "Handling any event-related issues or emergencies as they arise.",
]);

resps.set("Events-Executive", [
  "Assisting in event planning activities and initiatives.",
  "Contributing to the execution of club events.",
  "Providing support in coordinating with vendors, sponsors, and venues for event logistics.",
  "Assisting in ensuring the smooth execution of events and participant satisfaction.",
  "Collaborating with the events team to integrate events into club activities.",
  "Assisting in handling event-related issues or emergencies as they arise.",
  "Assisting in managing event-related documentation and follow-up tasks.",
]);

resps.set("Events-Head", [
  "Assisting the Events Team Lead in overseeing event planning activities.",
  "Contributing to the conceptualization and planning of club events.",
  "Coordinating with vendors, sponsors, and venues for event logistics.",
  "Assisting in managing event budgets, including expenses and revenue generation.",
  "Ensuring the smooth execution of events and participant satisfaction.",
  "Collaborating with the events team to integrate events into club activities.",
  "Assisting in handling event-related issues or emergencies as they arise.",
]);

resps.set("Outreach-Lead", [
  "Leading the outreach team and overseeing all outreach activities.",
  "Developing and implementing outreach strategies to engage the community.",
  "Establishing partnerships with external organizations and sponsors.",
  "Coordinating outreach events and activities to promote the club.",
  "Managing communication channels to connect with the target audience.",
  "Collaborating with other teams to align outreach efforts with club objectives.",
  "Measuring and reporting on the effectiveness of outreach initiatives.",
]);

resps.set("Outreach-Executive", [
  "Assisting in outreach activities and initiatives.",
  "Supporting the execution of outreach strategies.",
  "Assisting in establishing partnerships with external organizations.",
  "Participating in coordinating outreach events and activities.",
  "Assisting in managing communication channels for effective community engagement.",
  "Collaborating with the outreach team to align efforts with club objectives.",
  "Assisting in measuring and reporting on the effectiveness of outreach initiatives.",
]);

resps.set("Outreach-Head", [
  "Assisting the Outreach Team Lead in overseeing outreach activities.",
  "Contributing to the development of outreach strategies.",
  "Supporting the establishment of partnerships with external organizations.",
  "Assisting in coordinating outreach events and activities.",
  "Managing communication channels for effective community engagement.",
  "Collaborating with the outreach team to align efforts with club objectives.",
  "Assisting in measuring and reporting on the effectiveness of outreach initiatives.",
]);

resps.set("Technical-Lead", [
  "Leading the technical team and overseeing all technical projects.",
  "Planning, executing, and managing coding-related activities and events.",
  "Supervising technical workshops, seminars, and coding competitions.",
  "Collaborating with other teams to integrate technical elements into club activities.",
  "Providing technical expertise and guidance to team members.",
  "Conducting code reviews and providing constructive feedback to improve code quality.",
  "Staying updated with the latest trends and technologies in coding and development.",
]);

resps.set("Technical-Executive", [
  "Assisting in technical projects and coding-related activities.",
  "Supporting technical workshops, seminars, and coding competitions.",
  "Collaborating with other teams to integrate technical elements into club activities.",
  "Providing technical support and assistance to team members.",
  "Assisting in code reviews and providing feedback for code improvement.",
  "Staying updated with the latest trends and technologies in coding and development.",
  "Assisting in the organization and logistics of technical events.",
]);

resps.set("Technical-Head", [
  "Assisting the Technical Team Lead in overseeing technical projects.",
  "Contributing to the planning and execution of coding-related activities.",
  "Coordinating technical workshops, seminars, and coding competitions.",
  "Collaborating with other teams to integrate technical elements into club activities.",
  "Providing technical support and assistance to team members.",
  "Assisting in code reviews and providing feedback for code improvement.",
  "Staying updated with the latest trends and technologies in coding and development.",
]);

resps.set("Social Media-Lead", [
  "Leading the social media team and overseeing all social media activities.",
  "Developing and implementing social media strategies to promote the club.",
  "Creating and curating engaging content for various social media platforms.",
  "Managing social media calendars, including scheduling posts and campaigns.",
  "Analyzing and reporting on social media performance and engagement metrics.",
  "Collaborating with other teams to align social media efforts with club objectives.",
  "Staying updated with the latest trends and best practices in social media marketing.",
]);

resps.set("Social Media-Executive", [
  "Assisting in social media activities and content creation initiatives.",
  "Contributing to the creation of engaging content for various platforms.",
  "Assisting in managing social media calendars and scheduling posts.",
  "Monitoring social media channels and engaging with the audience.",
  "Assisting in analyzing social media performance and engagement metrics.",
  "Collaborating with the social media team to integrate efforts into club activities.",
  "Staying updated with the latest trends in social media marketing.",
]);

resps.set("Social Media-Head", [
  "Assisting the Social Media Team Lead in overseeing social media activities.",
  "Contributing to the development of social media strategies and content.",
  "Managing social media calendars, including scheduling posts and campaigns.",
  "Creating and curating engaging content for various social media platforms.",
  "Analyzing and reporting on social media performance and engagement metrics.",
  "Collaborating with other teams to integrate social media efforts into club activities.",
]);

resps.set("Media-Lead", [
  "Leading the media team and overseeing all media-related projects.",
  "Planning and executing media coverage for club events and activities.",
  "Managing photography and videography teams for capturing moments.",
  "Editing and curating media content to align with club branding.",
  "Collaborating with other teams to integrate media elements into club activities.",
  "Conducting media-related workshops and training sessions for the team.",
  "Staying updated with the latest trends in media production and editing.",
]);

resps.set("Media-Executive", [
  "Assisting in media-related projects and coverage.",
  "Supporting photography and videography teams in capturing moments.",
  "Assisting in editing and curating media content.",
  "Collaborating with other teams to integrate media elements into club activities.",
  "Assisting in organizing and conducting media-related workshops.",
  "Staying updated with the latest trends in media production and editing.",
  "Providing support for media logistics and equipment management.",
]);

resps.set("Media-Head", [
  "Assisting the Media Team Lead in overseeing media-related projects.",
  "Contributing to the planning and execution of media coverage.",
  "Managing photography and videography teams for capturing moments.",
  "Editing and curating media content to align with club branding.",
  "Collaborating with other teams to integrate media elements into club activities.",
  "Assisting in conducting media-related workshops and training sessions.",
  "Staying updated with the latest trends in media production and editing.",
]);

resps.set("Graphics-Lead", [
  "Spearheading the design team and overseeing all graphic design projects.",
  "Setting creative direction, style guidelines, and visual standards for the club's materials.",
  "Managing a team of graphic designers, assigning tasks, and ensuring timely delivery of projects.",
  "Collaborating with other teams to align visual elements with overall club objectives.",
  "Conceptualizing and executing complex design projects with attention to detail and creativity.",
  "Conducting regular design reviews and providing constructive feedback to team members.",
  "Keeping up-to-date with industry trends and technologies to enhance the club's visual presence.",
]);

resps.set("Graphics-Executive", [
  "Creating visually appealing graphics for the club's events, workshops, and promotions.",
  "Designing posters, banners, and social media graphics to promote club activities.",
  "Collaborating with the Graphic Head to ensure designs adhere to established guidelines.",
  "Incorporating feedback and making revisions to graphics as needed.",
  "Assisting in creating multimedia content for presentations and workshops.",
  "Maintaining an organized library of design assets for future use.",
  "Contributing to the overall design efforts of the club.",
]);

resps.set("Graphics-Head", [
  "Leading the design team in creating visually appealing graphics for club events and promotions.",
  "Setting design guidelines and ensuring consistency across all club materials.",
  "Collaborating with the Graphic Lead to assign and manage design tasks effectively.",
  "Assisting in the review and refinement of design projects to maintain high-quality standards.",
  "Coordinating with other teams to align visual elements with overall club objectives.",
  "Contributing to the conceptualization and execution of design projects.",
  "Staying updated with design trends and technologies to produce compelling visuals.",
]);

export const reqs = new Map();

reqs.set("Logistics-Lead", [
  "Providing strategic direction for logistical operations.",
  "Actively participating in club-wide decision-making processes.",
  "Serving as a liaison between the logistics team and other teams for seamless coordination.",
  "Mentoring and guiding junior logistics team members.",
  "Representing the logistics team in club meetings and reporting on progress.",
  "Collaborating with the leadership team to align logistics strategies with club objectives.",
]);

reqs.set("Logistics-Executive", [
  "Playing a crucial role in logistical operations.",
  "Actively participating in club-wide logistical discussions.",
  "Serving as a link between the logistics team and other teams for seamless coordination.",
  "Providing support to logistics team members as needed.",
  "Representing the logistics team in meetings and providing updates on progress.",
  "Collaborating with logistics leaders to achieve logistical goals aligned with club objectives.",
]);

reqs.set("Logistics-Head", [
  "Playing a key role in logistical operations.",
  "Actively participating in club-wide logistical discussions.",
  "Serving as a bridge between the logistics team and other teams for seamless coordination.",
  "Providing support and mentorship to junior logistics team members.",
  "Representing the logistics team in meetings and reporting on progress.",
  "Collaborating with the Logistics Team Lead to achieve logistical goals aligned with club objectives.",
]);

reqs.set("Hr-Lead", [
  "Providing strategic direction for HR-related initiatives.",
  "Actively participating in club-wide decision-making processes.",
  "Serving as a liaison between the HR team and other teams for seamless coordination.",
  "Mentoring and guiding junior HR team members.",
  "Representing the HR team in club meetings and reporting on progress.",
  "Collaborating with the leadership team to align HR strategies with club objectives.",
]);

reqs.set("Hr-Executive", [
  "Playing a crucial role in HR-related functions.",
  "Actively participating in club-wide HR discussions.",
  "Serving as a link between the HR team and other teams for seamless coordination.",
  "Providing support to HR team members as needed.",
  "Representing the HR team in meetings and providing updates on progress.",
  "Collaborating with HR leaders to achieve HR goals aligned with club objectives.",
]);

reqs.set("Hr-Head", [
  "Playing a key role in HR-related initiatives.",
  "Actively participating in club-wide HR discussions.",
  "Serving as a bridge between the HR team and other teams for seamless coordination.",
  "Providing support and mentorship to junior HR team members.",
  "Representing the HR team in meetings and reporting on progress.",
  "Collaborating with the HR Team Lead to achieve HR goals aligned with club objectives.",
]);

reqs.set("Content-Lead", [
  "Providing strategic direction for the content team and driving content excellence.",
  "Actively contributing to the club's messaging and communication efforts.",
  "Serving as a liaison between the content team and other teams to ensure cohesive messaging.",
  "Actively participating in brainstorming sessions and offering creative input for projects.",
  "Representing the content team in club meetings and reporting on progress and achievements.",
  "Mentoring and guiding junior content creators to enhance their skills and capabilities.",
]);

reqs.set("Content-Executive", [
  "Playing a crucial role in maintaining the club's messaging and communication standards.",
  "Actively contributing to the promotion of club activities through compelling content.",
  "Collaborating with other teams to ensure content aligns with club objectives.",
  "Actively participating in brainstorming sessions and offering creative input for projects.",
  "Representing the content team in club meetings and providing updates on progress.",
  "Continuously learning and growing as a content creator, honing your skills and creativity.",
]);

reqs.set("Content-Head", [
  "Playing a key role in maintaining the club's messaging and communication standards.",
  "Actively participating in content discussions and offering creative input for projects.",
  "Serving as a bridge between the content team and other teams for seamless coordination.",
  "Providing support and mentorship to junior content creators to foster their growth.",
  "Representing the content team in meetings and reporting on progress and achievements.",
  "Collaborating with the Content Team Lead to ensure timely project delivery and team productivity.",
]);

reqs.set("Events-Lead", [
  "Providing strategic direction for event planning and execution.",
  "Actively participating in club-wide decision-making processes.",
  "Serving as a liaison between the events team and other teams for seamless coordination.",
  "Mentoring and guiding junior events team members.",
  "Representing the events team in club meetings and reporting on progress.",
  "Collaborating with the leadership team to align event strategies with club objectives.",
]);

reqs.set("Events-Executive", [
  "Playing a crucial role in event planning and execution.",
  "Actively participating in club-wide event planning discussions.",
  "Serving as a link between the events team and other teams for seamless coordination.",
  "Providing support to events team members as needed.",
  "Representing the events team in meetings and providing updates on progress.",
  "Collaborating with events leaders to achieve event planning goals aligned with club objectives.",
]);

reqs.set("Events-Head", [
  "Playing a key role in event planning and execution.",
  "Actively participating in club-wide event planning discussions.",
  "Serving as a bridge between the events team and other teams for seamless coordination.",
  "Providing support and mentorship to junior events team members.",
  "Representing the events team in meetings and reporting on progress.",
  "Collaborating with the Events Team Lead to achieve event planning goals aligned with club objectives.",
]);

reqs.set("Outreach-Lead", [
  "Providing strategic direction for outreach efforts.",
  "Actively participating in club-wide decision-making processes.",
  "Serving as a liaison between the outreach team and other teams for seamless coordination.",
  "Mentoring and guiding junior outreach team members.",
  "Representing the outreach team in club meetings and reporting on progress.",
  "Collaborating with the leadership team to align outreach strategies with club objectives.",
]);

reqs.set("Outreach-Executive", [
  "Playing a crucial role in outreach efforts and community engagement.",
  "Actively participating in club-wide outreach discussions.",
  "Serving as a link between the outreach team and other teams for seamless coordination.",
  "Providing support to outreach team members as needed.",
  "Representing the outreach team in meetings and providing updates on progress.",
  "Collaborating with outreach leaders to achieve outreach goals aligned with club objectives.",
]);

reqs.set("Outreach-Head", [
  "Playing a key role in outreach efforts and community engagement.",
  "Actively participating in club-wide outreach discussions.",
  "Serving as a bridge between the outreach team and other teams for seamless coordination.",
  "Providing support and mentorship to junior outreach team members.",
  "Representing the outreach team in meetings and reporting on progress.",
  "Collaborating with the Outreach Team Lead to achieve outreach goals aligned with club objectives.",
]);

reqs.set("Technical-Lead", [
  "Providing strategic direction for technical projects and activities.",
  "Actively participating in club-wide decision-making processes.",
  "Serving as a liaison between the technical team and other teams for seamless coordination.",
  "Mentoring and guiding junior technical team members.",
  "Representing the technical team in club meetings and reporting on progress.",
  "Collaborating with the leadership team to align technical strategies with club objectives.",
]);

reqs.set("Technical-Executive", [
  "Playing a crucial role in technical projects and coding activities.",
  "Actively participating in club-wide technical discussions.",
  "Serving as a link between the technical team and other teams for seamless coordination.",
  "Providing support to technical team members as needed.",
  "Representing the technical team in meetings and providing updates on progress.",
  "Collaborating with technical leaders to achieve technical goals aligned with club objectives.",
]);

reqs.set("Technical-Head", [
  "Playing a key role in technical projects and coding activities.",
  "Actively participating in club-wide technical discussions.",
  "Serving as a bridge between the technical team and other teams for seamless coordination.",
  "Providing support and mentorship to junior technical team members.",
  "Representing the technical team in meetings and reporting on progress.",
  "Collaborating with the Technical Team Lead to achieve technical goals aligned with club objectives.",
]);

reqs.set("Social Media-Lead", [
  "Providing strategic direction for social media initiatives.",
  "Actively participating in club-wide decision-making processes.",
  "Serving as a liaison between the social media team and other teams for seamless coordination.",
  "Mentoring and guiding junior social media team members.",
  "Representing the social media team in club meetings and reporting on progress.",
  "Collaborating with the leadership team to align social media strategies with club objectives.",
]);

reqs.set("Social Media-Executive", [
  "Playing a crucial role in social media initiatives and content creation.",
  "Actively participating in club-wide social media discussions.",
  "Serving as a link between the social media team and other teams for seamless coordination.",
  "Providing support to social media team members as needed.",
  "Representing the social media team in meetings and providing updates on progress.",
  "Collaborating with social media leaders to achieve social media goals aligned with club objectives.",
]);

reqs.set("Social Media-Head", [
  "Playing a key role in social media initiatives and content creation.",
  "Actively participating in club-wide social media discussions.",
  "Serving as a bridge between the social media team and other teams for seamless coordination.",
  "Providing support and mentorship to junior social media team members.",
  "Representing the social media team in meetings and reporting on progress.",
  "Collaborating with the Social Media Team Lead to achieve social media goals aligned with club objectives.",
]);

reqs.set("Media-Lead", [
  "Providing strategic direction for media projects and coverage.",
  "Actively participating in club-wide decision-making processes.",
  "Serving as a liaison between the media team and other teams for seamless coordination.",
  "Mentoring and guiding junior media team members.",
  "Representing the media team in club meetings and reporting on progress.",
  "Collaborating with the leadership team to align media strategies with club objectives.",
]);

reqs.set("Media-Executive", [
  "Playing a crucial role in media projects and coverage.",
  "Actively participating in club-wide media discussions.",
  "Serving as a link between the media team and other teams for seamless coordination.",
  "Providing support to media team members as needed.",
  "Representing the media team in meetings and providing updates on progress.",
  "Collaborating with media leaders to achieve media goals aligned with club objectives.",
]);

reqs.set("Media-Head", [
  "Playing a key role in media projects and coverage.",
  "Actively participating in club-wide media discussions.",
  "Serving as a bridge between the media team and other teams for seamless coordination.",
  "Providing support and mentorship to junior media team members.",
  "Representing the media team in meetings and reporting on progress.",
  "Collaborating with the Media Team Lead to achieve media goals aligned with club objectives.",
]);

reqs.set("Graphics-Lead", [
  "Providing visionary leadership to the design team and driving creative excellence.",
  "Actively contributing to the club's visual identity and brand representation.",
  "Serving as a liaison between the design team and other teams to ensure cohesive messaging.",
  "Actively participating in brainstorming sessions and offering creative input for projects.",
  "Representing the design team in club meetings and reporting on progress and achievements.",
  "Mentoring and guiding junior designers to enhance their skills and capabilities.",
]);

reqs.set("Graphics-Executive", [
  "Playing a crucial role in maintaining the club's visual identity and overall branding.",
  "Actively contributing to the promotion of club activities through compelling visuals.",
  "Collaborating with other teams to ensure visual elements align with club objectives.",
  "Actively participating in brainstorming sessions and offering creative input for projects.",
  "Representing the design team in club meetings and providing updates on progress.",
  "Continuously learning and growing as a designer, honing your skills and creativity.",
]);

reqs.set("Graphics-Head", [
  "Playing a key role in maintaining the club's visual identity and brand representation.",
  "Actively participating in design discussions and offering creative input for projects.",
  "Serving as a bridge between the design team and other teams for seamless coordination.",
  "Providing support and mentorship to junior designers to foster their growth.",
  "Representing the design team in meetings and reporting on progress and achievements.",
  "Collaborating with the Graphic Lead to ensure timely project delivery and team productivity.",
]);

export const benes = new Map();

benes.set("Logistics-Lead", [
  "Opportunity to lead and shape the logistics function of the club.",
  "Gain valuable leadership experience in managing a team.",
  "Enhance your logistical and management skills for future career opportunities.",
  "Network and collaborate with professionals in event planning and logistics.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your significant contribution to the club's success.",
  "Contribute to creating seamless and memorable club events.",
]);

benes.set("Logistics-Executive", [
  "Gain practical experience in logistical activities.",
  "Contribute to the messaging and communication efforts of the club.",
  "Build a portfolio showcasing your logistical work for future career opportunities.",
  "Connect and collaborate with professionals in event planning and logistics.",
  "Develop time management and logistical efficiency skills in a team environment.",
  "Access to exclusive logistical resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Logistics-Head", [
  "Opportunity to contribute significantly to logistical functions.",
  "Gain experience in logistics management and coordination.",
  "Showcase your logistical expertise for future career opportunities.",
  "Connect and collaborate with professionals in event planning and logistics.",
  "Enhance your project management and team coordination skills.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Hr-Lead", [
  "Opportunity to lead and shape the HR function of the club.",
  "Gain valuable leadership experience in managing a team.",
  "Enhance your HR and management skills for future career opportunities.",
  "Network and collaborate with HR professionals.",
  "Access to exclusive HR-related resources, workshops, and events organized by the club.",
  "Recognition for your significant contribution to the club's success.",
  "Contribute to creating a positive club culture and work environment.",
]);

benes.set("Hr-Executive", [
  "Gain practical experience in HR-related activities.",
  "Contribute to the messaging and communication efforts of the club.",
  "Build a portfolio showcasing your HR work for future career opportunities.",
  "Connect and collaborate with HR professionals and enthusiasts.",
  "Develop time management and HR efficiency skills in a team environment.",
  "Access to exclusive HR-related resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Hr-Head", [
  "Opportunity to contribute significantly to HR functions.",
  "Gain experience in HR management and coordination.",
  "Showcase your HR expertise for future career opportunities.",
  "Connect and collaborate with HR professionals and experts.",
  "Enhance your project management and team coordination skills.",
  "Access to exclusive HR-related resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Content-Lead", [
  "Opportunity to lead and shape the content strategy of a dynamic club.",
  "Gain valuable leadership experience in managing a team of talented content creators.",
  "Enhance your portfolio with a diverse range of high-quality content projects.",
  "Network and collaborate with like-minded individuals passionate about content creation.",
  "Develop project management and team coordination skills essential for professional growth.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your significant contribution to the club's success.",
]);

benes.set("Content-Executive", [
  "Gain practical experience in creating diverse and impactful content materials.",
  "Contribute to the messaging and communication efforts of a dynamic and innovative club.",
  "Build a portfolio showcasing your content work for future career opportunities.",
  "Connect and collaborate with a creative community of content creators and professionals.",
  "Develop time management and content creation efficiency skills in a team environment.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Content-Head", [
  "Opportunity to lead and influence the content direction of an innovative club.",
  "Gain experience in managing a team and coordinating content projects effectively.",
  "Showcase a diverse range of content projects in your portfolio for professional advancement.",
  "Network with fellow content creators and professionals, expanding your creative community.",
  "Hone your project management and team collaboration skills for future career opportunities.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your significant contribution to the club's success.",
]);

benes.set("Events-Lead", [
  "Opportunity to lead and shape the event planning function of the club.",
  "Gain valuable leadership experience in planning and executing events.",
  "Enhance your event planning and management skills for future career opportunities.",
  "Network and collaborate with professionals in event planning and management.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your significant contribution to the club's success.",
  "Contribute to creating memorable and impactful club events.",
]);

benes.set("Events-Executive", [
  "Gain practical experience in event planning activities.",
  "Contribute to the messaging and communication efforts of the club.",
  "Build a portfolio showcasing your event planning work for future career opportunities.",
  "Connect and collaborate with professionals in event planning and management.",
  "Develop time management and event planning efficiency skills in a team environment.",
  "Access to exclusive event planning resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Events-Head", [
  "Opportunity to contribute significantly to event planning functions.",
  "Gain experience in event planning and coordination.",
  "Showcase your event planning expertise for future career opportunities.",
  "Connect and collaborate with professionals in event planning and management.",
  "Enhance your project management and team coordination skills.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Outreach-Lead", [
  "Opportunity to lead and shape the outreach function of the club.",
  "Gain valuable leadership experience in community engagement and outreach.",
  "Enhance your outreach and partnership-building skills for future career opportunities.",
  "Network and collaborate with professionals in outreach and community relations.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your significant contribution to the club's success.",
  "Contribute to building strong connections with the community and external partners.",
]);

benes.set("Outreach-Executive", [
  "Gain practical experience in outreach activities and community engagement.",
  "Contribute to the messaging and communication efforts of the club.",
  "Build a portfolio showcasing your outreach work for future career opportunities.",
  "Connect and collaborate with professionals in outreach and community relations.",
  "Develop time management and outreach efficiency skills in a team environment.",
  "Access to exclusive outreach resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Outreach-Head", [
  "Opportunity to contribute significantly to outreach functions.",
  "Gain experience in community engagement and outreach strategies.",
  "Showcase your outreach expertise for future career opportunities.",
  "Connect and collaborate with professionals in outreach and community relations.",
  "Enhance your project management and team coordination skills.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Technical-Lead", [
  "Opportunity to lead and shape the technical projects of the club.",
  "Gain valuable leadership experience in coding-related activities.",
  "Enhance your technical and coding skills for future career opportunities.",
  "Network and collaborate with professionals in the coding and development field.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your significant contribution to the club's success.",
  "Contribute to fostering a strong coding community within the club.",
]);

benes.set("Technical-Executive", [
  "Gain practical experience in technical projects and coding-related activities.",
  "Contribute to the messaging and communication efforts of the club.",
  "Build a portfolio showcasing your technical work for future career opportunities.",
  "Connect and collaborate with professionals in the coding and development field.",
  "Develop time management and technical efficiency skills in a team environment.",
  "Access to exclusive technical resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Technical-Head", [
  "Opportunity to contribute significantly to technical projects and coding activities.",
  "Gain experience in planning and executing coding-related initiatives.",
  "Showcase your technical expertise for future career opportunities.",
  "Connect and collaborate with professionals in the coding and development field.",
  "Enhance your project management and team coordination skills.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Social Media-Lead", [
  "Opportunity to lead and shape the social media presence of the club.",
  "Gain valuable leadership experience in social media marketing.",
  "Enhance your social media management skills for future career opportunities.",
  "Network and collaborate with professionals in digital marketing and social media.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your significant contribution to the club's success.",
  "Contribute to building a strong online community for the club.",
]);

benes.set("Social Media-Executive", [
  "Gain practical experience in social media marketing and content creation.",
  "Contribute to the messaging and communication efforts of the club.",
  "Build a portfolio showcasing your social media work for future career opportunities.",
  "Connect and collaborate with professionals in digital marketing and social media.",
  "Develop time management and social media efficiency skills in a team environment.",
  "Access to exclusive social media resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Social Media-Head", [
  "Opportunity to contribute significantly to the club's social media presence.",
  "Gain experience in social media marketing and content creation.",
  "Showcase your social media management expertise for future career opportunities.",
  "Connect and collaborate with professionals in digital marketing and social media.",
  "Enhance your project management and team coordination skills.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Media-Lead", [
  "Opportunity to lead and shape the media coverage of the club.",
  "Gain valuable leadership experience in media production and editing.",
  "Enhance your media editing and production skills for future career opportunities.",
  "Network and collaborate with professionals in media production.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your significant contribution to the club's success.",
  "Contribute to preserving memorable moments for the club's history.",
]);

benes.set("Media-Executive", [
  "Gain practical experience in media production, editing, and coverage.",
  "Contribute to the messaging and communication efforts of the club.",
  "Build a portfolio showcasing your media work for future career opportunities.",
  "Connect and collaborate with professionals in media production.",
  "Develop time management and media production efficiency skills in a team environment.",
  "Access to exclusive media resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Media-Head", [
  "Opportunity to contribute significantly to media coverage and projects.",
  "Gain experience in media production, editing, and coverage.",
  "Showcase your media editing and production expertise for future career opportunities.",
  "Connect and collaborate with professionals in media production.",
  "Enhance your project management and team coordination skills.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Graphics-Lead", [
  "Opportunity to lead and shape the visual identity of a dynamic club.",
  "Gain valuable leadership experience in managing a team of talented designers.",
  "Enhance your portfolio with a diverse range of high-quality design projects.",
  "Network and collaborate with like-minded individuals passionate about design.",
  "Develop project management and team coordination skills essential for professional growth.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your significant contribution to the club's success.",
]);

benes.set("Graphics-Executive", [
  "Gain practical experience in creating diverse and impactful content materials.",
  "Contribute to the messaging and communication efforts of a dynamic and innovative club.",
  "Build a portfolio showcasing your content work for future career opportunities.",
  "Connect and collaborate with a creative community of content creators and professionals.",
  "Develop time management and content creation efficiency skills in a team environment.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your contributions to the club's success.",
]);

benes.set("Graphics-Head", [
  "Opportunity to lead and influence the visual direction of an innovative club.",
  "Gain experience in managing a team and coordinating design projects effectively.",
  "Showcase a diverse range of design projects in your portfolio for professional advancement.",
  "Network with fellow designers and professionals, expanding your creative community.",
  "Hone your project management and team collaboration skills for future career opportunities.",
  "Access to exclusive resources, workshops, and events organized by the club.",
  "Recognition for your significant contribution to the club's success.",
]);

export const homeHero = {
  title1: "Are you ready to take your career to the next level?",
  title2: "Bag an Apprenticeship. Escalate your career",
  text: "At Coding Ninjas CUIET, we're committed to helping you learn, grow, and succeed in the tech world. Explore a world of opportunities, gain hands-on experience, and learn from industry experts as you set out on a path to success. Don't miss out on this chance to bag an apprenticeship and accelerate your career. Apply today and unlock the door to a bright and promising future!",
  btn: "View Openings",
};
