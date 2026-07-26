# Missing-information checklist

Everything in the site currently renders correctly. The items below are **not
required** for the site to run, but filling them in makes it fully production-
ready. Each maps to a specific file or environment variable.

## Profile

- [ ] LinkedIn URL → `NEXT_PUBLIC_LINKEDIN_URL`
- [ ] GitHub URL → `NEXT_PUBLIC_GITHUB_URL`
- [ ] Personal domain (used as `NEXT_PUBLIC_SITE_URL`)
- [ ] Professional headshot → `public/images/headshot.*` + `profile.headshot`
- [ ] Preferred professional title override → `src/data/profile.ts`
- [ ] Short personal biography (if different from current copy)

## Résumé

- [ ] Final résumé PDF → `public/resume/abhinav-bharata-resume.pdf`
- [ ] Confirm resume download filename
- [ ] Decide whether cfd-agent should be added to the PDF résumé

## Data-center work

- [ ] Publicly shareable Revit screenshots
- [ ] Power-skid images
- [ ] Power-house images
- [ ] Liquid-cooling images
- [ ] Heat-load testing images
- [ ] Approved technical diagrams
- [ ] Additional project descriptions

## CFD work

- [ ] ANSYS Fluent screenshots
- [ ] Mesh images
- [ ] Velocity contours
- [ ] Pressure contours
- [ ] Temperature contours
- [ ] Residual plots
- [ ] Validation comparisons

## cfd-agent

- [ ] GitHub repository → `NEXT_PUBLIC_CFD_AGENT_REPOSITORY`
- [ ] Demo video → `NEXT_PUBLIC_CFD_AGENT_DEMO`
- [ ] Screenshots (CLI, terminal output)
- [ ] Current command help output
- [ ] Current architecture diagram (replace illustrative one)
- [ ] Exact exception hierarchy
- [ ] Current test count
- [ ] Current coverage percentage
- [ ] Supported OpenFOAM distribution and version
- [ ] Supported operating systems
- [ ] Installation instructions
- [ ] Example case files
- [ ] Actual mesh statistics
- [ ] Actual solver output
- [ ] Roadmap milestones
- [ ] License
- [ ] Contribution instructions

## Contact

- [ ] Preferred contact-form provider (Resend configured by default)
- [ ] Preferred public email (defaults to `bharata.abhinav@gmail.com`)
- [ ] Availability for consulting (optional)
- [ ] Work authorization / relocation information (optional, only if desired)
